import { PrismicRichText } from '@prismicio/react';

const ProjectBody = ({ content }) => {
  return (
    <section className="container prose mr-auto max-w-3xl font-primary text-sm hover:prose-a:text-yellow-500 dark:text-neutral-200 dark:prose-headings:text-neutral-200 dark:prose-a:text-neutral-200 dark:prose-strong:text-neutral-200 md:prose-img:w-[65%]">
      <PrismicRichText field={content} />
    </section>
  );
};

export default ProjectBody;
