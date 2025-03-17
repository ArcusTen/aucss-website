import React from 'react'
import Image from 'next/image';
import { decor, operations, creative, protocol, red_teaming, ctf_team, blue_teaming, awarenessclub, sportsMale, sportsFemale, women, photography, aucsc, entertainment, graphicsteam } from '../assets';

const clubs = [
  {
    name: "Red Teaming",
    leadName: "Lead: Abdul Wahab Khan",
    coLeadName: ["Co-Lead: Mishqat Abid"],
    imageUrl: red_teaming,
  },
  {
    name: "Blue Teaming",
    leadName: "Lead: Muzammil Akhtar",
    coLeadName: ["Co-Lead: Hanzalah"],
    imageUrl: blue_teaming,
  },
  {
    name: "CTF Team",
    leadName: "CTF QA Lead: Radeel Ahmed",
    coLeadName: [
      "CTF Front-End Lead: Muhammad Mazhar",
      "CTF Back-End Lead: Khizar Shah"
    ],
    imageUrl: ctf_team,
  },
  {
    name: "Security and Protocol Team",
    leadName: "Leads: Muhammad Abdullah Tarar",
    coLeadName: ["Co-Lead: Fatima"],
    imageUrl: protocol,
  },
  {
    name: "Media Team",
    leadName: "Lead: Hammad Ahmed",
    coLeadName: [
      "Co-Lead: Fizza Afzal",
      "Co-Lead Coverage: Mikail Afridi"
    ],
    imageUrl: photography,
  },
  {
    name: "Management & Operations Team",
    leadName: "Lead: Tooba Arshad",
    coLeadName: [
      "Co-Lead Management: Zeeshan Ali",
      "Co-Lead Operations: Sardar Ahmed"
    ],
    imageUrl: operations,
  },
  {
    name: "Graphics Team",
    leadName: "Lead: Bareeha",
    coLeadName: ["Co-Lead: Iqra Noor"],
    imageUrl: graphicsteam,
  },
  {
    name: "Awareness Club",
    leadName: "Lead: Nahl Imran",
    coLeadName: ["Co-Lead: Eman Naseer"],
    imageUrl: awarenessclub,
  },
  {
    name: "Cyber Skills Club",
    leadName: "Lead: Waqar",
    coLeadName: ["Co-Lead: Hira Asmat"],
    imageUrl: aucsc,
  },
  {
    name: "Research Club",
    leadName: "Lead: Effa",
    coLeadName: ["Co-Lead: Junaid"],
    imageUrl: creative,
  },
  {
    name: "Women in Cyber Security Club",
    leadName: "Lead: Zuha Fatima",
    coLeadName: ["Co-Lead: Sommia Jalil"],
    imageUrl: women,
  },
  {
    name: "Sports Club (Female)",
    leadName: "Lead: Zujaj Shafaq",
    coLeadName: ["Co-Lead: Alizeh"],
    imageUrl: sportsFemale,
  },
  {
    name: "Sports Club (Male)",
    leadName: "Lead: Taha Qamar",
    coLeadName: ["Co-Lead: Talal Ahmed"],
    imageUrl: sportsMale,
  },
  {
    name: "Entertainment Club",
    leadName: "Lead: Ibad ul Haq",
    coLeadName: ["Co-Lead: Waqar"],
    imageUrl: entertainment,
  },
  {
    name: "Decor Club",
    leadName: "Lead: Sadia Naveed",
    coLeadName: ["Co-Lead: Zeeshan Ahmed"],
    imageUrl: decor,
  },
];

const Clubs = () => {
  return (
    <section className="bg-white py-24 sm:py-32 font-montserrat" id="clubs">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-wide text-navprimary md:text-4xl">
            Our Clubs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our society consists of 8 clubs, each of which is led by a club lead.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {clubs.map((club) => (
            <li key={club.name}>
              <Image
                className="aspect-[2/2] w-full rounded-2xl object-cover"
                src={club.imageUrl}
                alt={club.name}
                width={500}
                height={500}
              />
              <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-navprimary">
                {club.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{club.leadName}</p>
              {club.coLeadName.map((coLead, index) => (
                <p key={index} className="text-base leading-7 text-gray-600">{coLead}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Clubs;
