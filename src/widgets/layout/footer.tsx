// import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <div className="font-normal text-inherit">
          &copy; {year}
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/simple-footer.jsx";

export default Footer;
