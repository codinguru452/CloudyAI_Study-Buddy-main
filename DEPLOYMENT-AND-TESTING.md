# CloudyAI Study Buddy — integration, testing, and Vercel deployment

## What is connected

- The deployed dashboard is served by the existing Next.js application at `/cloudyai/index.html`.
- The dashboard requests approved questions from `GET /api/questions`.
- When backend questions are available, answer submission creates an authenticated quiz session using `POST /api/quiz/session`, then checks and saves answers through `POST /api/quiz/submit`.
- The backend returns correctness and the official explanation only after submission.
- Incorrect answers request the tutor JSON response from `POST /api/tutor`.
- If the questions API is unavailable, the frontend remains usable in clearly labeled local demo mode.
- The existing `Frontend/` source folder is retained. A deployment copy of its three browser files lives in `backend/public/cloudyai/` because Vercel is configured to build the Next.js app from `backend/`.

## Local testing

1. Install Node.js 20.9 or newer.
2. Open a terminal in `backend/`.
3. Run `npm ci`.
4. Copy `.env.example` to `.env.local` and fill in the Supabase values from your project settings. Do not commit `.env.local`.
5. Ensure the SQL in `supabase/schema.sql` has been run in the correct Supabase project and the question bank has been imported/reviewed as approved.
6. Run `npm run dev` and open `http://localhost:3000`.
7. Visit `http://localhost:3000/api/questions`. It should return JSON with `count` and `questions`. A count of zero means no questions have been approved or seeded yet.
8. Open `/auth`, create an account or sign in, and return to the dashboard.
9. Submit an answer. Check the browser Network tab: `/api/quiz/session` should return `201` and `/api/quiz/submit` should return `201`. An unauthenticated submission should return `401` and send the learner to `/auth`.
10. Test an incorrect answer and confirm the tutor section appears. Note: the tutor route is currently a mock response, not a live AI call.
11. Run `npm run build` to test the production build.

## Vercel deployment

1. Import the existing GitHub repository into Vercel.
2. In Project Settings → General → Root Directory, choose `backend`.
3. Add these Environment Variables in Vercel Project Settings → Environment Variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_URL`, and `SUPABASE_SECRET_KEY`. Use the appropriate values for Production and Preview. Never put a secret key in browser code.
4. Deploy. Vercel will build the Next.js app from `backend/` and serve the dashboard from `backend/public/cloudyai/`.
5. Test the deployed `/api/questions`, `/auth`, quiz session, quiz submission, and tutor endpoints using the steps above.

## Important notes

- Questions must have `review_status = 'approved'` in Supabase to appear in the live quiz.
- Quiz sessions and answer submission require a signed-in Supabase user.
- The misconception engine's optional repeated-pattern analysis logs errors but does not undo a successfully saved answer.
- The tutor endpoint currently returns a grounded mock response. A live AI provider still needs to be integrated separately.
- This integration does not modify the existing top-level `api/.env.local` file. Keep environment files out of public repositories and use Vercel Environment Variables for deployment.
- The original `Frontend/` source files and their deployed copies should be kept in sync when future frontend changes are made.
