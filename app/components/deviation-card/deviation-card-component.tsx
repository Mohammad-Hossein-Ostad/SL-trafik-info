import React from "react";

type DeviationCard = {
  from: string;
  upto: string;
  header: string;
  details: string;
};

export default function DeviationCard({
  from,
  upto,
  header,
  details,
}: DeviationCard) {
  const charStartAt = 0;
  const charEndAt = 10;
  const secoundSectionCharStartAt = 12;
  const secoudnSectionCharEndAt = 16;

  const fromCurrentDate = from.slice(charStartAt, charEndAt);
  const fromCurrentTime = from.slice(
    secoundSectionCharStartAt,
    secoudnSectionCharEndAt,
  );

  const uptoDeviationDate = upto.slice(charStartAt, charEndAt);
  const uptoDeviationTime = upto.slice(
    secoundSectionCharStartAt,
    secoudnSectionCharEndAt,
  );

  return (
    <div className="my-5 flex flex-col border-l-4 p-4 font-mono dark:text-white">
      <article>
        <h1 className="my-3 text-2xl dark:text-white">{header}</h1>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-500">
          ⚠️från: {fromCurrentDate} - kl {fromCurrentTime}
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-500">
          upptill: {uptoDeviationDate} - kl {uptoDeviationTime}
        </span>
        <p className="text-balance text-sm leading-9 text-gray-700 dark:text-gray-400">
          {details}
        </p>
      </article>
    </div>
  );
}
