export interface SectionItem {
    image: string;
    name: string;
    description: string;
    isRound?: boolean;
    title?: string;
    link?: string;
}

export interface DataItem {
    image: string;
    title: string;
    sections: SectionItem[];
}

export interface Comment {
    email: string;
    link: string;
    image: string;
    name: string;
    jobTitle: string;
    text: string;
}

export type ResumeProps = {
    data: DataItem[];
};