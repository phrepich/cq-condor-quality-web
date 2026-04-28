import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function isValidPayload(payload: ContactPayload) {
  return Boolean(
    payload.name &&
      payload.company &&
      payload.email &&
      payload.phone &&
      payload.service &&
      payload.message &&
      payload.message.trim().length >= 20
  );
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!isValidPayload(payload)) {
    return Response.json(
      { ok: false, message: "Completa todos los campos y describe el requerimiento con mayor contexto." },
      { status: 400 }
    );
  }

  const storageDir = join(process.cwd(), ".data");
  const storageFile = join(storageDir, "contact-submissions.ndjson");
  const entry = {
    ...payload,
    createdAt: new Date().toISOString(),
  };

  await mkdir(storageDir, { recursive: true });
  await appendFile(storageFile, `${JSON.stringify(entry)}\n`, "utf8");

  return Response.json({ ok: true });
}
