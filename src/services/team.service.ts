export type Team = {
  id: number;
  name: string;
};
export const allTeams: Team[] = [
  { id: 1, name: "team 1" },
  { id: 2, name: "team 2" },
  { id: 3, name: "team 3" },
  { id: 4, name: "team 4" },
  { id: 5, name: "team 5" },
  { id: 6, name: "team 6" },
  { id: 7, name: "team 7" },
];
export const TeamService = {
  findById(id: number): Team | undefined {
    return allTeams.find((ele) => ele.id == id);
  },
  findAll(): Team[] {
    return allTeams;
  },
  findByNameMatch(text: string): Team[] {
    return allTeams.filter(
      (ele) => ele.name.toLocaleLowerCase() == text.toLocaleLowerCase()
    );
  },
  add(team: Team[]): boolean {
    return allTeams.length + team.length == allTeams.push(...team);
  },
  remove(id: number): boolean {
    const beforeDelete = allTeams.length;
    allTeams.filter((ele, index) => {
      if (ele.id == id) {
        allTeams.splice(index, 1);
        return;
      }
    });
    const afterDelete = allTeams.length;
    return beforeDelete - 1 == afterDelete ? true : false;
  },
  update(team: Team): boolean {
    const isDataUpdated = allTeams.filter((ele) => {
      if (ele.id == team.id) {
        ele.name = team.name;
        return true;
      }
    });
    return isDataUpdated.length ? true : false;
  },
};
