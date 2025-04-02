export type StatusProps = "not" | "doing" | "done";
export type DataType = {
    lsxId: string;
    status: StatusProps;
    deadline: string;
    progress: {
        planned: number;
        actual: number;
    };
    isPinned: boolean
}

export const useData = () => {
    const listData: DataType[] = [
        {
            lsxId: 'LSX-13032514',
            status: "not",
            deadline: '2023-12-01',
            progress: {
                planned: 50, actual: 20,

            },
            isPinned: true
        },
        {
            lsxId: 'LSX-13012514',
            status: "doing",
            deadline: '2023-12-05',
            progress: { planned: 80, actual: 60 },
            isPinned: false
        },
        {
            lsxId: 'LSX-13032914',
            status: "done",
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 },
            isPinned: true
        },
        {
            lsxId: 'LSX-17032514',
            status: "done",
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 },
            isPinned: true
        },
        {
            lsxId: 'LSX-13037514',
            status: "not",
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 },
            isPinned: false

        },
    ];

    return {
        listData,
    }
};

