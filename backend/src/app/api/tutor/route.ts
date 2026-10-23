import { NextResponse } from "next/server";

type TutorRequest = {
  questionStem?: unknown;
  userAnswer?: unknown;
  correctAnswer?: unknown;
  conceptNote?: unknown;
  officialExplanation?: unknown;
};

// This route currently provides a grounded mock tutor response. It is structured
// so the frontend can use the same JSON contract when a real AI provider is added.
export async function POST(request: Request) {
  let body: TutorRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must contain valid JSON." }, { status: 400 });
  }

  const questionStem = typeof body.questionStem === "string" ? body.questionStem.trim() : "";
  const userAnswer = typeof body.userAnswer === "string" ? body.userAnswer.trim() : "";
  const conceptNote = typeof body.conceptNote === "string" ? body.conceptNote.trim() : "Review the key concept for this question.";
  const officialExplanation = typeof body.officialExplanation === "string" ? body.officialExplanation.trim() : "Compare your selected option with the official explanation.";

  if (!questionStem || !userAnswer) {
    return NextResponse.json({ error: "questionStem and userAnswer are required." }, { status: 400 });
  }

  return NextResponse.json({
    encouragement: "Good effort! Let's use this attempt to strengthen the concept.",
    explanation: `${officialExplanation} Key concept: ${conceptNote}`,
    analogy: "Think of learning a cloud concept like learning a new route: checking where you turned helps you choose the right direction next time.",
    follow_up_question: "What clue in the question would help you identify this concept next time?",
    mode: "grounded-mock",
  });
}
