import { PrismicRichText } from '@prismicio/react';

const ProjectBody = ({ content }) => {
  return (
    <section className="container prose mx-auto max-w-3xl font-primary hover:prose-a:text-yellow-500">
      <PrismicRichText field={content} />
    </section>
  );
};

export default ProjectBody;
