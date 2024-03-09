export type Author = {
    id: string,
    name: string,
    imageUrl: string
}

export type Message = {
    content: string,
    postedDate: Date,
    author: Author,
}

export type Thread = {
    id: string,
    title: string,
    author: Author,
    postedDate: Date,
    messages: Message[]
}

export type List = {
    list: string,
    name: string,
    threads: Thread[]
}
