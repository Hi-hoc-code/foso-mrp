export const useData = () => {
    const listData = [
        {
            lsxId: 'LSX-13032514',
            status: 'Chưa sản xuất',
            deadline: '2023-12-01',
            progress: { planned: 50, actual: 20 },
            pinned: false,
        },
        {
            lsxId: 'LSX-13012514',
            status: 'Đang sản xuất',
            deadline: '2023-12-05',
            progress: { planned: 80, actual: 60 },
            pinned: true,
        },
        {
            lsxId: 'LSX-13032914',
            status: 'Hoàn thành',
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 },
            pinned: false,
        },
        {
            lsxId: 'LSX-17032514',
            status: 'Hoàn thành',
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 },
            pinned: false,
        },
        {
            lsxId: 'LSX-13037514',
            status: 'Hoàn thành',
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 },
            pinned: false,
        },
    ];
    return {listData}
};

