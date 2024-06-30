import PropTypes from "prop-types";

interface PageTitleProps {
  section: string;
  heading: string;
  children: React.ReactNode;
}

export function PageTitle({ section, heading, children }: PageTitleProps) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <div className="font-semibold">{section}</div>
      <div color="blue-gray" className="my-3">
        {heading}
      </div>
      <div className="text-blue-gray-500">
        {children} 
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.tsx";

export default PageTitle;
