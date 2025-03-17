import React from 'react'
import Image from 'next/image'
import { management, blueteam, security, redteam, technical, awareness, graphics, ctfteam} from '../assets';

const teams = [
  {
    name: "Technical Team",
    role: "Leads & Co-Leads",
    imageUrl: technical,
  },
  {
    name: "Women In Cyber & Awareness",
    role: "Leads & Co-Leads",
    imageUrl: awareness,
  },
  {
    name: "Management & Operations Team",
    role: "Leads & Co-Leads",
    imageUrl: management,
  },
  {
    name: "Graphics & Media Team",
    role: "Leads & Co-Leads",
    imageUrl: graphics,
  },
  {
    name: "Security & Protocol Team",
    role: "Leads & Co-Leads",
    imageUrl: security,
  },
  {
    name: "Red Team",
    role: "Leads & Co-Leads",
    imageUrl: redteam,
  },
  {
    name: "CTF Team",
    role: "Leads & Co-Leads",
    imageUrl: ctfteam,
  },
  {
    name: "Blue Team",
    role: "Leads & Co-Leads",
    imageUrl: blueteam,
  },
];
const Teams = () => {
  return (
    <div className="bg-white py-24 sm:py-32 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-wide text-navprimary md:text-4xl">
            Our Teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AUCSS consists of 5 teams, each of which is led by a team
            lead and each team has clubs under it.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {teams.map((team) => (
            <li key={team.name}>
              <Image
                className="aspect-[2/2] w-full rounded-2xl object-cover"
                src={team.imageUrl}
                alt=""
                width={500}
                height={500}
              />
              <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-navprimary">
                {team.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{team.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Teams