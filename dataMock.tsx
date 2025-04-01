const dataMock = async () => {
    return [
        {
            lsxId: 'LSX001',
            status: 'Chưa sản xuất',
            deadline: '2023-12-01',
            progress: { planned: 50, actual: 20 },
            pinned: false,
        },
        {
            lsxId: 'LSX002',
            status: 'Đang sản xuất',
            deadline: '2023-12-05',
            progress: { planned: 80, actual: 60 },
            pinned: true,
        },
        {
            lsxId: 'LSX003',
            status: 'Hoàn thành',
            deadline: '2023-11-30',
            progress: { planned: 100, actual: 100 },
            pinned: false,
        },
    ];
};

export default dataMock;
