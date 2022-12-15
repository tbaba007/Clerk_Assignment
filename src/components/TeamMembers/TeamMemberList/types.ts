enum roles{
    "Admin",
    "Agent",
    "Manager",
    "Member"
}

export interface ITeam{
    id?: number;
    name: string;
    inbox?: string;
    role?: roles;
    picturePath?: string;
}

export interface IRoles{
    name: string;
    role: string;
}

