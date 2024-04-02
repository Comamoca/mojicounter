import { createSignal, createMemo, JSX, ParentProps} from "solid-js";
import { count } from "./counter";

function Layout(props: ParentProps): JSX.Element {
  return (
    <>
      <div class="flex flex-col justify-center">{props.children}</div>
    </>
  );
}

function Hero() {
  return (
    <>
      <h1 class="text-4xl text-center mt-20 mb-10">文字数カウント</h1>
      <p class="text-center w-3/5 mx-auto">
        使い方: 下の欄に文章を貼り付けると自動で文字数がカウントされます。
        原稿用紙換算、段落数も数えることができます。
        <span class="text-primary font-semibold">「単語の数」は英語としてカウントされるため、日本語文字列は正しくカウントされないことがあります。</span>
      </p>
    </>
  );
}

function TextArea() {
  const [text, setText] = createSignal("");
  const countText = createMemo(() => count(text()));

  return (
    <>
      <div class="flex flex-col">
        <div class="flex justify-center">
          <textarea
            class="sm:max-w-sm sm:h-48 max-w-64 max-h-40 mx-auto scroll-box border-4 textarea textarea-primary mt-10 resize-y"
            placeholder="ここに文字を入力"
            oninput={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div class="sm:w-2/5 mx-auto">
          {/* TODO: 横画面では結果を横並びで表示する。 */}
          {/* <div class="flex sm:flex-row flex-col mt-5"> */}
          <div class="flex flex-col mt-5">
            <hr class="my-2 border-base-300" />
            <div class="flex justify-between mx-2">
              <span>字数(スペースなし)</span>
              <span>{countText().characters} 文字</span>
            </div>

            <hr class="my-2 border-base-300" />
            <div class="flex justify-between mx-2">
              <span>字数</span>
              <span>{countText().all} 文字</span>
            </div>

            <hr class="my-2 border-base-300" />
            <div class="flex justify-between mx-2">
              <span>原稿用紙</span>
              <span>約 {Math.floor(countText().characters / 400)} 枚分</span>
            </div>

            <hr class="my-2 border-base-300" />
            <div class="flex justify-between mx-2">
              <span>読み終わるまでの目安</span>
              <span>約 {Math.floor(countText().characters / 500)} 分</span>
            </div>

            <hr class="my-2 border-base-300" />
            <div class="flex justify-between mx-2">
              <span>単語の数(英語のみ)</span>
              <span>{countText().words} 個</span>
            </div>

            <hr class="my-2 border-base-300" />
            <div class="flex justify-between mx-2">
              <span>段落数</span>
              <span>{countText().paragraphs} 個</span>
            </div>

            <hr class="my-2 border-base-300" />
            <div class="flex justify-between mx-2">
              <span>文の数</span>
              <span>{countText().sentences} 個</span>
            </div>
            <hr class="my-2 border-base-300" />
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div class="p-5 border-2 border-secondary sm:w-2/5 w-4/5 mx-auto my-10 card bg-base-100 shadow-xl">
        <p>
          このサイトはオープンソースで開発されており、GitHub上でソースコードが公開されています。
          バグ報告等はGitHub、質問等はTwitterにて受け付けております。
        </p>
        <div class="flex flex-col mt-5">
          <div class="flex justify-between mx-2">
            <span>リポジトリ</span>
            <span>
              <a
                class="link link-primary"
                href="https://github.com/comamoca/mojicounter"
              >
                mojicounter
              </a>
            </span>
          </div>

          <hr class="my-2 border-base-300" />
          <div class="flex justify-between mx-2">
            <span>Twitter</span>
            <span>
              <a class="link link-primary">@Comamoca_</a>
            </span>
          </div>

          <hr class="my-2 border-base-300" />
          <div class="flex justify-between mx-2">
            <span>ホームページ</span>
            <span>
              <a class="link link-primary">@Comamoca_</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <TextArea />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
