import Image from "next/image";
import Link from "next/link";

import {
  PAGE_HEADING,
  TEMPLATES,
  ARTICLES,
  SCREENS_FILTERS_LIST,
  SCREENS_IMAGES_LIST,
} from "@/constants/index.js";
import SectionHeadingWithButton from "@/components/section-heading-and-button";
import TemplateCard from "@/components/template-card";
import ArticleCard from "@/components/article-card";
import Filter from "@/components/filter";

export default function Home() {
  if (TEMPLATES.length <= 0) return null;

  return (
    <main className="md:ml-[155px] px-9 lg:px-4">
      <Heading heading={PAGE_HEADING} />
      <Templates templates={TEMPLATES} />
      <Articles articles={ARTICLES} />
      <Screens
        screensFilterList={SCREENS_FILTERS_LIST}
        screenImages={SCREENS_IMAGES_LIST}
      />
    </main>
  );
}

const Heading = ({ heading }) => {
  return (
    <div className="mt-28 flex flex-col gap-3 items-center">
      <h1 className="flex flex-col items-center text-primary text-3xl md:text-4xl text-center font-500 md:leading-[48px]">
        <span>{heading.title1}</span>
        <span>{heading.title2}</span>
      </h1>
      <p className="text-sm text-secondary text-center leading-[20.8px] max-w-xl">
        {heading.description}
      </p>
    </div>
  );
};

const Templates = ({ templates }) => {
  return (
    <div className="w-full mt-8 md:mt-6">
      <SectionHeadingWithButton title="Templates" />
      <div className="grid grid-cols-12 gap-5">
        {templates.map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <TemplateCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Articles = ({ articles }) => {
  return (
    <div className="w-full mt-9 md:mt-4">
      <SectionHeadingWithButton title="Articles" />
      <div className="grid grid-cols-12 gap-5 place-items-center">
        {articles.map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <ArticleCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Screens = ({ screensFilterList, screenImages }) => {
  return (
    <div className="w-full mt-9 md:mt-4">
      <SectionHeadingWithButton title="Screens" />
      <Filter list={screensFilterList} />
      <div className="grid grid-cols-12 xl:grid-cols-5 gap-3 place-items-center">
        {screenImages.map((item, index) => (
          <div
            key={index}
            className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-1"
          >
            <Link href="/">
              <article className="rounded-2xl overflow-hidden border border-primary">
                <Image src={item} className="object-cover" />
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
