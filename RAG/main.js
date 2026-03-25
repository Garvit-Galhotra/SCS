import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

import { MistralAIEmbeddings } from "@langchain/mistralai";

import dotenv from "dotenv";

import { Pinecone } from "@pinecone-database/pinecone";

dotenv.config();

const pdfloader = new PDFLoader("./story.pdf");

const pdfDocs = await pdfloader.load();

const embeddings = new MistralAIEmbeddings({
  apikey: process.env.MISTRALAI_API_KEY,
  model: "mistral-embed",
});

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pc.Index("cohort-2-rag");

const embedDocs = await Promise.all(
  pdfDocs.map(async (docs) => {
    const embed = await embeddings.embedQuery(docs.pageContent);
    return {
      docs: docs,
      embed: embed,
    };
  }),
);

// item -> docs -> Document -> pagecontent, metadata, etc
// idx -> index of the document in the array

const result = await index.upsert({
  records: embedDocs.map((item, idx) => ({
    id: `pdf-doc-${idx}`,
    values: item.embed,
    metadata: {
      text: item.docs.pageContent,
    },
  })),
});

console.log(result);
