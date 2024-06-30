import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <div className="font-normal text-inherit">
          &copy; {year}, made with{" "}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5" /> by{" "}
          <a
            href={"!#"}
            target="_blank" rel="noreferrer"
            className="transition-colors hover:text-blue-500"
          >
            {"Github"}
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/simple-footer.jsx";

export default Footer;
