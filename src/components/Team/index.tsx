import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Sebastian Rodríguez",
    designation: "Backend Developer",
    image: "/images/team/team-1.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Sebastian Triviño",
    designation: "Frontend Developer",
    image: "/images/team/team-2.jpg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Nuestro Equipo"
            title="Conoce a Nuestro Equipo"
            paragraph="Nuestro equipo está compuesto por personas apasionadas y dedicadas que trabajan incansablemente para rescatar y encontrar hogares para animales abandonados. Conócelos y descubre cómo hacen la diferencia cada día."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
