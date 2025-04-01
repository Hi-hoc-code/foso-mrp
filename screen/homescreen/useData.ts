export type StatusProps = "not" | "doing" | "done";
export type DataType = {
    lsxId: string;
    status: StatusProps;
    deadline: string;
    progress: {
        planned: number;
        actual: number;
    };
}
export type headerType={
    imgLeft: string,
    title: string,
    imgRight: string,
}
export const useData = () => {
    const listData: DataType[] = [
        {
            lsxId: 'LSX-13032514',
            status: "not",
            deadline: '2023-12-01',
            progress: {
                planned: 50, actual: 20,

            }
        },
        {
            lsxId: 'LSX-13012514',
            status: "doing",
            deadline: '2023-12-05',
            progress: { planned: 80, actual: 60 }
        },
        {
            lsxId: 'LSX-13032914',
            status: "done",
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 }
        },
        {
            lsxId: 'LSX-17032514',
            status: "done",
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 }
        },
        {
            lsxId: 'LSX-13037514',
            status: "not",
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 }

        },
    ];


    return {
        listData,

    }
};

