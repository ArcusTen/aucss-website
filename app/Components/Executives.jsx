import React from 'react'
import Image from 'next/image';
import { kumail, abdullahharoon, zainabsaif, sundas, qalb, anas, shahal, husnain, faizan, abdullah, abdullahtufail, rafay} from '../assets';

const Executives = () => {
    const people = [
      {
        name: "Husnain Tahir",
        role: "President",
        imageUrl: husnain,
        linkedinUrl: "https://www.linkedin.com/in/husnain-tahir-551921225/",
      },
      {
        name: "Rafay Malik",
        role: "Vice President",
        imageUrl: rafay,
        linkedinUrl: "https://www.linkedin.com/in/muhammad-rafay-malik-a38181273/",
      },
      {
        name: "Muhammad Abdullah",
        role: "Technical Secretary",
        imageUrl: abdullah,
        linkedinUrl: "https://www.linkedin.com/in/muhammad-abdullah-691a1026a/",
      },
      {
        name: "Faizan Arshad",
        role: "General Secretary 1",
        imageUrl: faizan,
        linkedinUrl: "https://www.linkedin.com/in/faizanars/",
      },
      {
        name: "Zainab Saif",
        role: "General Secretary 2",
        imageUrl: zainabsaif,
        linkedinUrl: "#",
      },
      {
        name: "Kumail Zaidi",
         role: "Joint Secretary Technical",
         imageUrl: kumail,
         linkedinUrl: "https://www.linkedin.com/in/kumailzaidi23/",
       },
      {
        name: "Abdullah Tufail",
        role: "Ambassador",
        imageUrl: abdullahtufail,
        linkedinUrl: "https://www.linkedin.com/in/abdula2fal/",
      },
      {
        name: "Abdullah Haroon",
        role: "Joint Secretary Media & Graphics",
        imageUrl: abdullahharoon,
        linkedinUrl: "#",
      },
      {
        name: "Sundas Rashid",
        role: "Joint Secretary Awareness & Women In Cyber",
        imageUrl: sundas,
        linkedinUrl: "#",
      },
      {
        name: "Shahal Farid",
        role: "Joint Secretary Sports & Adventure",
        imageUrl: shahal,
        linkedinUrl: "#",
      },
      {
        name: "Anas Zeeshan",
         role: "Joint Secretary Security & Protocol",
         imageUrl: anas,
         linkedinUrl: "https://www.linkedin.com/in/anas-zeeshan-4aba75152/",
       },
      {
        name: "Qalbe Abbas",
        role: "Joint Secretary Management & Operations",
        imageUrl: qalb,
        linkedinUrl: "#",
      },
    ];
  return (
    <div className="bg-gray-800 py-24 sm:py-32 font-montserrat">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet our executive team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            AUCSS is headed by the President, co-headed by the Vice President, 
            Technical Secretary and General Secretary
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-gray-700 px-8 py-10"
            >
              <Image
                className="mx-auto h-48 w-48 rounded-full md:h-60 md:w-50 object-cover"
                src={person.imageUrl}
                alt=""
                width={400}
                height={400}
              />
              <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-300">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Executives