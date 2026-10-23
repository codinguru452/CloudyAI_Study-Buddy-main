/* CloudyAI Study Buddy - frontend-only demo. No API or backend integration. */
const questions = [
  {
    id: "CC-001",
    domain: "Cloud concepts",
    topic: "Cloud economics",
    difficulty: "Beginner",
    stem: "Which cloud financial model lets an organization pay for computing resources as it uses them, rather than buying hardware upfront?",
    options: [
      { letter: "A", text: "Capital expenditure (CapEx)" },
      { letter: "B", text: "Operational expenditure (OpEx)" },
      { letter: "C", text: "A fixed hardware purchase" },
      { letter: "D", text: "A data centre lease" },
    ],
    correct: "B",
    explanation:
      "Operational expenditure (OpEx) pays for services as they are consumed. CapEx typically involves upfront investment in physical infrastructure.",
    tag: "CapEx vs. OpEx",
    tagDescription:
      "Confusing upfront infrastructure investment with ongoing consumption-based costs.",
    concept:
      "CapEx is usually an upfront investment in assets; OpEx covers ongoing operating costs, including many pay-as-you-go cloud services.",
    misconception: "Cloud spending always requires buying servers first.",
  },
  {
    id: "CC-002",
    domain: "Cloud concepts",
    topic: "Cloud characteristics",
    difficulty: "Beginner",
    stem: "A retail website experiences a sudden increase in visitors during a sale. Which cloud concept describes adding resources to meet the increased demand?",
    options: [
      { letter: "A", text: "High availability" },
      { letter: "B", text: "Governance" },
      { letter: "C", text: "Scalability" },
      { letter: "D", text: "Fault isolation" },
    ],
    correct: "C",
    explanation:
      "Scalability is the ability to adjust resources to meet workload demands. Elasticity describes scaling resources up or down as demand changes.",
    tag: "Scalability vs. availability",
    tagDescription:
      "Mixing up the ability to handle changing demand with keeping a service running.",
    concept:
      "Scalability adjusts capacity for workload needs. Availability is about whether a service is accessible when needed.",
    misconception:
      "Adding more resources is the same thing as high availability.",
  },
  {
    id: "CC-003",
    domain: "Cloud concepts",
    topic: "Cloud service types",
    difficulty: "Beginner",
    stem: "Which cloud service model gives you virtual machines while you manage the operating system and installed applications?",
    options: [
      { letter: "A", text: "Software as a Service (SaaS)" },
      { letter: "B", text: "Platform as a Service (PaaS)" },
      { letter: "C", text: "Infrastructure as a Service (IaaS)" },
      { letter: "D", text: "Function as a Service only" },
    ],
    correct: "C",
    explanation:
      "With IaaS, the provider manages physical infrastructure while you generally manage the operating system, configuration, and applications on your virtual machines.",
    tag: "IaaS vs. PaaS",
    tagDescription:
      "Confusing managed infrastructure with a platform where the provider manages more of the runtime.",
    concept:
      "IaaS provides foundational computing resources. PaaS abstracts more of the operating system and runtime management.",
    misconception: "The cloud provider manages every layer in IaaS.",
  },
  {
    id: "AZ-001",
    domain: "Azure architecture and services",
    topic: "Regions and availability zones",
    difficulty: "Intermediate",
    stem: "What is the main purpose of availability zones within an Azure region?",
    options: [
      { letter: "A", text: "To group subscriptions by department" },
      {
        letter: "B",
        text: "To provide physically separate locations with independent power, cooling, and networking",
      },
      {
        letter: "C",
        text: "To replace the need for backups in every workload",
      },
      { letter: "D", text: "To determine a resource’s billing owner" },
    ],
    correct: "B",
    explanation:
      "Availability zones are physically separate locations within an Azure region, designed to improve resiliency when a zone experiences an outage. They do not replace backups.",
    tag: "Regions vs. zones",
    tagDescription:
      "Treating an Azure region and an availability zone as interchangeable.",
    concept:
      "A region is a geographic area containing one or more data centres. Availability zones are separate locations within supported regions.",
    misconception:
      "An availability zone is a completely different Azure region.",
  },
  {
    id: "AZ-002",
    domain: "Azure architecture and services",
    topic: "Resource hierarchy",
    difficulty: "Beginner",
    stem: "Which Azure construct is commonly used to manage and organize resources that belong to the same solution?",
    options: [
      { letter: "A", text: "Resource group" },
      { letter: "B", text: "Availability zone" },
      { letter: "C", text: "Microsoft Entra user" },
      { letter: "D", text: "Service health alert" },
    ],
    correct: "A",
    explanation:
      "A resource group is a logical container for Azure resources that are managed together. A resource belongs to one resource group at a time.",
    tag: "Resource groups vs. subscriptions",
    tagDescription:
      "Confusing the container for related resources with a broader billing and access boundary.",
    concept:
      "Subscriptions provide a management and billing boundary; resource groups organize related resources within a subscription.",
    misconception: "A resource group is the same as an Azure subscription.",
  },
  {
    id: "AZ-003",
    domain: "Azure architecture and services",
    topic: "Identity",
    difficulty: "Intermediate",
    stem: "Which Microsoft cloud service provides identity and access management for users and applications?",
    options: [
      { letter: "A", text: "Azure Monitor" },
      { letter: "B", text: "Azure Policy" },
      { letter: "C", text: "Microsoft Entra ID" },
      { letter: "D", text: "Azure Blob Storage" },
    ],
    correct: "C",
    explanation:
      "Microsoft Entra ID is Microsoft’s cloud-based identity and access management service for users, groups, and applications.",
    tag: "Identity vs. governance",
    tagDescription:
      "Confusing identity services that authenticate users with governance tools that enforce resource rules.",
    concept:
      "Microsoft Entra ID manages identities and authentication. Azure Policy helps enforce organizational standards on resources.",
    misconception: "Azure Policy is the service that signs users in.",
  },
  {
    id: "MG-001",
    domain: "Azure management and governance",
    topic: "Access control",
    difficulty: "Intermediate",
    stem: "An administrator wants to control which actions a user can perform on Azure resources. Which service should they use?",
    options: [
      { letter: "A", text: "Azure Cost Management" },
      { letter: "B", text: "Azure role-based access control (Azure RBAC)" },
      { letter: "C", text: "Azure Service Health" },
      { letter: "D", text: "Azure Advisor only" },
    ],
    correct: "B",
    explanation:
      "Azure RBAC assigns roles to users, groups, or applications at a scope, controlling which actions they can perform on Azure resources.",
    tag: "RBAC vs. Azure Policy",
    tagDescription:
      "Mixing permission assignments with rules that evaluate or enforce resource configuration.",
    concept:
      "Azure RBAC controls who can do what at a given scope. Azure Policy evaluates and helps enforce resource compliance.",
    misconception:
      "Azure Policy is the main tool for assigning user permissions.",
  },
  {
    id: "MG-002",
    domain: "Azure management and governance",
    topic: "Governance",
    difficulty: "Beginner",
    stem: "A company wants to prevent resources from being created in unapproved Azure regions. Which service is best suited to this requirement?",
    options: [
      { letter: "A", text: "Azure Policy" },
      { letter: "B", text: "Azure Monitor" },
      { letter: "C", text: "Microsoft Entra ID only" },
      { letter: "D", text: "Azure Service Health" },
    ],
    correct: "A",
    explanation:
      "Azure Policy can evaluate and enforce rules such as restricting deployments to approved locations. Identity permissions alone do not express this resource-compliance rule.",
    tag: "Policy vs. access control",
    tagDescription:
      "Assuming user permissions alone enforce all organizational configuration requirements.",
    concept:
      "Azure Policy governs resource configuration and compliance. Azure RBAC governs permissions and permitted actions.",
    misconception:
      "Restricting a user’s role automatically enforces every resource standard.",
  },
];
const domains = [
  "Cloud concepts",
  "Azure architecture and services",
  "Azure management and governance",
];
// Backend integration state. The local question bank remains available as a demo fallback.
const answerResults = {};
let backendMode = false;
let quizSessionId = null;
let isSubmitting = false;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let currentQuestion = 0;
let selectedAnswers = {};
let submittedAnswers = {};
let toastTimer;
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}
function goToPage(page) {
  const valid = ["dashboard", "quiz", "radar", "topics"];
  if (!valid.includes(page)) return;
  $$(".page").forEach((el) =>
    el.classList.toggle("active", el.id === `page-${page}`),
  );
  $$(".nav-link").forEach((el) =>
    el.classList.toggle("active", el.dataset.page === page),
  );
  $("#crumbCurrent").textContent = {
    dashboard: "Overview",
    quiz: "Practice quiz",
    radar: "Misconception radar",
    topics: "Topic explorer",
  }[page];
  $("#sidebar").classList.remove("open");
  if (page === "dashboard") renderDashboard();
  if (page === "radar") renderRadar();
  if (page === "topics") renderTopics();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function isAnswerCorrect(question) {
  const result = answerResults[question.id];
  if (result && typeof result.isCorrect === "boolean") return result.isCorrect;
  return typeof question.correct === "string" && submittedAnswers[question.id] === question.correct;
}
function scoreStats() {
  const answered = Object.keys(submittedAnswers).length;
  const correct = questions.filter((q) => submittedAnswers[q.id] !== undefined && isAnswerCorrect(q)).length;
  return {
    answered,
    correct,
    incorrect: answered - correct,
    accuracy: answered ? Math.round((correct / answered) * 100) : 0,
  };
}
function renderDashboard() {
  const stats = scoreStats();
  $("#statAnswered").innerHTML = `${stats.answered} <small>/ ${questions.length}</small>`;
  $("#statAccuracy").innerHTML = stats.answered ? `${stats.accuracy}<small>%</small>` : "—<small>%</small>";
  $("#answeredBar").style.width = `${questions.length ? (stats.answered / questions.length) * 100 : 0}%`;
  $("#accuracyBar").style.width = `${stats.accuracy}%`;
  $("#domainProgress").innerHTML = domains
    .map((domain) => {
      const qs = questions.filter((q) => q.domain === domain);
      const done = qs.filter((q) => submittedAnswers[q.id] !== undefined).length;
      const correct = qs.filter((q) => submittedAnswers[q.id] !== undefined && isAnswerCorrect(q)).length;
      const pct = done ? Math.round((correct / done) * 100) : 0;
      return `<div class="domain-row"><strong>${escapeHtml(domain)}</strong><small>${done ? `${correct}/${done} correct` : "Not started"}</small><div class="domain-bar"><span style="width:${pct}%"></span></div></div>`;
    }).join("");
  const reviewItems = questions.filter((q) => submittedAnswers[q.id] !== undefined && !isAnswerCorrect(q));
  const suggested = (reviewItems.length ? reviewItems : questions.slice(0, 3)).slice(0, 3);
  $("#focusList").innerHTML = suggested.map((q) =>
    `<div class="focus-item"><span class="focus-dot"></span><div><strong>${escapeHtml(q.tag || q.topic)}</strong><p>${escapeHtml(q.topic)} · ${reviewItems.length ? "Review your answer" : "Recommended concept review"}</p></div></div>`
  ).join("");
}
function renderQuestion() {
  if (!questions.length) {
    $("#questionStem").textContent = "No approved questions are available yet.";
    $("#answerOptions").innerHTML = "";
    $("#quizQuestionCount").textContent = "NO QUESTIONS AVAILABLE";
    $("#submitAnswer").classList.add("hidden");
    return;
  }
  if (currentQuestion >= questions.length) currentQuestion = questions.length - 1;
  const q = questions[currentQuestion];
  const result = answerResults[q.id];
  $("#quizQuestionCount").textContent = `QUESTION ${currentQuestion + 1} OF ${questions.length}`;
  $("#quizDifficulty").textContent = String(q.difficulty || "Foundation").toUpperCase();
  $("#quizDomain").textContent = q.domain || "AZ-900";
  $("#quizTopic").textContent = q.topic || "General concepts";
  $("#questionStem").textContent = q.stem;
  $("#quizProgressBar").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  $("#answerOptions").innerHTML = (q.options || []).map((option) => {
    let cls = "answer-option";
    if (selectedAnswers[q.id] === option.letter) cls += " selected";
    if (result) {
      if (option.letter === result.correctOptionLetter) cls += " correct";
      else if (option.letter === submittedAnswers[q.id] && !result.isCorrect) cls += " incorrect";
    } else if (!backendMode && submittedAnswers[q.id] !== undefined) {
      if (option.letter === q.correct) cls += " correct";
      else if (option.letter === submittedAnswers[q.id]) cls += " incorrect";
    }
    return `<button class="${cls}" data-option="${escapeHtml(option.letter)}" ${submittedAnswers[q.id] !== undefined || isSubmitting ? "disabled" : ""}><span class="option-letter">${escapeHtml(option.letter)}</span><span class="option-text">${escapeHtml(option.text)}</span></button>`;
  }).join("");
  const feedback = $("#answerFeedback");
  feedback.className = "answer-feedback hidden";
  if (submittedAnswers[q.id] !== undefined) {
    const correct = isAnswerCorrect(q);
    const explanation = result?.explanation || q.explanation || "Review the key concept and try another question.";
    const concept = result?.conceptNote || q.concept || q.topic || "Review this AZ-900 concept.";
    feedback.className = `answer-feedback ${correct ? "good" : "bad"}`;
    feedback.innerHTML = `<strong>${correct ? "✓ Correct answer" : "↻ Not quite — review the concept"}</strong><p>${escapeHtml(explanation)}</p><p><strong>Key concept:</strong> ${escapeHtml(concept)}</p>${result?.tutor ? `<p><strong>CloudyAI tutor:</strong> ${escapeHtml(result.tutor.explanation || "")}</p><p>${escapeHtml(result.tutor.analogy || "")}</p><p><strong>Think about this:</strong> ${escapeHtml(result.tutor.follow_up_question || "")}</p>` : ""}`;
  }
  $("#prevQuestion").disabled = currentQuestion === 0;
  $("#prevQuestion").style.opacity = currentQuestion === 0 ? ".45" : "1";
  const isSubmitted = submittedAnswers[q.id] !== undefined;
  $("#submitAnswer").classList.toggle("hidden", isSubmitted);
  $("#submitAnswer").disabled = isSubmitting;
  $("#nextQuestion").classList.toggle("hidden", !isSubmitted);
  $("#nextQuestion").innerHTML = currentQuestion === questions.length - 1 ? "Finish session ✓" : "Next question <span>→</span>";
  $("#answerStatus").textContent = isSubmitting ? "Checking answer…" : isSubmitted ? "Answer submitted" : selectedAnswers[q.id] ? "Answer selected" : "Select one answer";
  $("#questionGrid").innerHTML = questions.map((item, index) =>
    `<button class="question-tile ${index === currentQuestion ? "current" : ""} ${submittedAnswers[item.id] !== undefined ? "done" : ""}" data-question-index="${index}" aria-label="Go to question ${index + 1}">${index + 1}</button>`
  ).join("");
}
function chooseAnswer(letter) {
  const q = questions[currentQuestion];
  if (submittedAnswers[q.id] !== undefined) return;
  selectedAnswers[q.id] = letter;
  renderQuestion();
}
async function ensureQuizSession() {
  if (!backendMode || quizSessionId) return true;
  const response = await fetch("/api/quiz/session", { method: "POST" });
  if (response.status === 401) {
    window.location.href = "/auth?next=/cloudyai/index.html";
    return false;
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.session?.id) throw new Error(data.error || "Could not start a quiz session.");
  quizSessionId = data.session.id;
  return true;
}
async function submitAnswer() {
  const q = questions[currentQuestion];
  if (!q || !selectedAnswers[q.id]) {
    showToast("Choose an answer before checking.");
    return;
  }
  if (submittedAnswers[q.id] !== undefined || isSubmitting) return;
  isSubmitting = true;
  renderQuestion();
  try {
    if (backendMode) {
      const hasSession = await ensureQuizSession();
      if (!hasSession) return;
      const response = await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: quizSessionId, questionId: q.id, selectedOptionLetter: selectedAnswers[q.id] }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.status === 401) {
        window.location.href = "/auth?next=/cloudyai/index.html";
        return;
      }
      if (!response.ok) throw new Error(data.error || "The backend could not check this answer.");
      answerResults[q.id] = {
        isCorrect: data.isCorrect,
        correctOptionLetter: data.correctOptionLetter,
        explanation: data.explanation || q.explanation,
        conceptNote: data.conceptNote || q.concept,
      };
      // The tutor route is called only after the backend has verified an incorrect answer.
      if (!data.isCorrect) {
        try {
          const tutorResponse = await fetch("/api/tutor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              questionStem: q.stem,
              userAnswer: (q.options.find((o) => o.letter === selectedAnswers[q.id]) || {}).text || selectedAnswers[q.id],
              correctAnswer: data.correctOptionLetter,
              conceptNote: data.conceptNote || q.concept || q.topic,
              officialExplanation: data.explanation || q.explanation,
            }),
          });
          if (tutorResponse.ok) answerResults[q.id].tutor = await tutorResponse.json();
        } catch (tutorError) {
          console.warn("Tutor explanation was unavailable:", tutorError);
        }
      }
    } else {
      answerResults[q.id] = { isCorrect: selectedAnswers[q.id] === q.correct, correctOptionLetter: q.correct, explanation: q.explanation, conceptNote: q.concept };
    }
    submittedAnswers[q.id] = selectedAnswers[q.id];
    renderQuestion();
    renderDashboard();
    renderRadar();
    renderTopics();
    showToast(isAnswerCorrect(q) ? "Correct! Read the explanation to reinforce it." : "Answer checked. Review the explanation below.");
  } catch (error) {
    showToast(error instanceof Error ? error.message : "Could not submit your answer.");
  } finally {
    isSubmitting = false;
    renderQuestion();
  }
}
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
    return;
  }
  goToPage("dashboard");
  showToast("Session reviewed. Your progress has been updated for this browser session.");
}
function resetQuiz() {
  currentQuestion = 0;
  selectedAnswers = {};
  submittedAnswers = {};
  Object.keys(answerResults).forEach((key) => delete answerResults[key]);
  quizSessionId = null;
  renderQuestion();
  renderDashboard();
  renderRadar();
  renderTopics();
  showToast("Practice session reset.");
}
function renderRadar() {
  const tags = [...new Map(questions.map((q) => [q.tag, q])).values()];
  const filter = $("#radarFilter").value;
  const filtered = tags.filter((q) => filter === "all" || q.domain === filter);
  $("#radarCount").textContent = tags.length;
  $("#radarIncorrect").textContent = scoreStats().incorrect;
  $("#radarCards").innerHTML =
    filtered
      .map((q) => {
        const related = questions.filter((item) => item.tag === q.tag);
        const wrong = related.some(
          (item) =>
            submittedAnswers[item.id] !== undefined &&
            !isAnswerCorrect(item),
        );
        return `<article class="radar-card"><div class="radar-card-top"><span class="tag-badge">${escapeHtml(q.domain)}</span><span class="review-badge">${wrong ? "Review suggested" : "Concept review"}</span></div><h3>${escapeHtml(q.tag)}</h3><p class="description">${escapeHtml(q.tagDescription)}</p><div class="correct-concept"><small>REMEMBER THIS</small><p>${escapeHtml(q.concept)}</p></div><div class="radar-card-foot"><span>${escapeHtml(q.topic)}</span><span class="personal-status">${wrong ? "Missed in this session" : "Sample concept tag"}</span></div></article>`;
      })
      .join("") ||
    '<div class="empty-state">No concept cards match this filter.</div>';
}
function renderTopics() {
  const search = $("#topicSearch").value.trim().toLowerCase();
  const domain = $("#topicDomain").value;
  const difficulty = $("#topicDifficulty").value;
  const filtered = questions.filter(
    (q) =>
      (domain === "all" || q.domain === domain) &&
      (difficulty === "all" || q.difficulty === difficulty) &&
      `${q.stem} ${q.topic} ${q.tag} ${q.domain}`
        .toLowerCase()
        .includes(search),
  );
  $("#topicResults").innerHTML =
    filtered
      .map(
        (q) =>
          `<article class="topic-row"><div class="topic-row-icon">${q.domain === "Cloud concepts" ? "☁" : q.domain === "Azure architecture and services" ? "⌘" : "⚙"}</div><div class="topic-row-content"><h3>${escapeHtml(q.stem)}</h3><p>${escapeHtml(q.domain)} · ${escapeHtml(q.topic)} · ${submittedAnswers[q.id] !== undefined ? (isAnswerCorrect(q) ? "Answered correctly" : "Review answer") : "Not attempted"}</p></div><div class="topic-row-side"><span class="difficulty-tag ${q.difficulty === "Intermediate" ? "intermediate" : ""}">${q.difficulty}</span><button class="topic-open" data-start-question="${questions.indexOf(q)}" aria-label="Practice this question">→</button></div></article>`,
      )
      .join("") ||
    '<div class="empty-state">No questions found. Try another search or filter.</div>';
}
$$(".nav-link").forEach((button) =>
  button.addEventListener("click", () => goToPage(button.dataset.page)),
);
$$("[data-go]").forEach((button) =>
  button.addEventListener("click", () => goToPage(button.dataset.go)),
);
$("#mobileMenu").addEventListener("click", () =>
  $("#sidebar").classList.toggle("open"),
);
$("#helpButton").addEventListener("click", () =>
  showToast(
    "Choose Practice quiz to answer questions, or Misconception radar to review concepts.",
  ),
);
$("#answerOptions").addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (button) chooseAnswer(button.dataset.option);
});
$("#submitAnswer").addEventListener("click", submitAnswer);
$("#nextQuestion").addEventListener("click", nextQuestion);
$("#prevQuestion").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});
$("#questionGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-question-index]");
  if (button) {
    currentQuestion = Number(button.dataset.questionIndex);
    renderQuestion();
  }
});
$("#resetQuiz").addEventListener("click", resetQuiz);
$("#radarFilter").addEventListener("change", renderRadar);
$("#topicSearch").addEventListener("input", renderTopics);
$("#topicDomain").addEventListener("change", renderTopics);
$("#topicDifficulty").addEventListener("change", renderTopics);
$("#topicResults").addEventListener("click", (event) => {
  const button = event.target.closest("[data-start-question]");
  if (button) {
    currentQuestion = Number(button.dataset.startQuestion);
    goToPage("quiz");
    renderQuestion();
  }
});
async function loadBackendQuestions() {
  const badge = document.querySelector(".demo-badge");
  const disclaimer = document.querySelector("#page-dashboard .disclaimer");
  try {
    const response = await fetch("/api/questions", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Questions API is not ready.");
    const payload = await response.json();
    if (!Array.isArray(payload.questions) || payload.questions.length === 0) {
      if (badge) badge.textContent = "DEMO MODE · NO APPROVED QUESTIONS";
      if (disclaimer) disclaimer.textContent = "The backend is reachable, but no approved questions are available. Showing the built-in demo questions.";
      return;
    }
    const mapped = payload.questions.map((item) => ({
      id: String(item.question_id),
      domain: item.domain || "AZ-900",
      topic: item.topic || "General concepts",
      difficulty: item.difficulty || "Beginner",
      stem: item.stem,
      options: (item.options || []).map((option) => ({ letter: option.letter, text: option.text })),
      explanation: item.explanation || "Review the official explanation for this question.",
      concept: item.conceptNote || item.topic || "Review this AZ-900 concept.",
      tag: item.topic || "Concept review",
      tagDescription: item.conceptNote || item.topic || "Review this concept and compare it with related Azure services.",
      misconception: item.topic || "Concept review",
    })).filter((item) => item.id && item.stem && item.options.length > 0);
    if (!mapped.length) throw new Error("The API returned no usable questions.");
    questions.splice(0, questions.length, ...mapped);
    backendMode = true;
    quizSessionId = null;
    Object.keys(selectedAnswers).forEach((key) => delete selectedAnswers[key]);
    Object.keys(submittedAnswers).forEach((key) => delete submittedAnswers[key]);
    Object.keys(answerResults).forEach((key) => delete answerResults[key]);
    const availableDomains = [...new Set(mapped.map((item) => item.domain))];
    domains.splice(0, domains.length, ...availableDomains);
    const domainSelect = $("#topicDomain");
    if (domainSelect) {
      domainSelect.innerHTML = '<option value="all">All domains</option>' + availableDomains.map((domain) => `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`).join("");
    }
    const radarSelect = $("#radarFilter");
    if (radarSelect) {
      radarSelect.innerHTML = '<option value="all">All domains</option>' + availableDomains.map((domain) => `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`).join("");
    }
    if (badge) badge.textContent = "BACKEND CONNECTED";
    if (disclaimer) disclaimer.textContent = "Questions load from the CloudyAI API. Sign in to submit answers and save attempts. Progress in this dashboard currently reflects this browser session.";
    renderQuestion(); renderDashboard(); renderRadar(); renderTopics();
  } catch (error) {
    console.warn("CloudyAI backend is not connected yet; using demo questions.", error);
    if (badge) badge.textContent = "DEMO MODE";
    if (disclaimer) disclaimer.textContent = "Backend unavailable. Showing sample questions; answers are checked locally and are not saved to your account.";
  }
}
renderQuestion();
renderDashboard();
renderRadar();
renderTopics();
loadBackendQuestions();
