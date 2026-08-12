// Nguồn dữ liệu cho kế hoạch học 7 ngày.
// Điều khiển: sidebar, trang chủ, day hub, logic "bài học hôm nay".

export const DAYS = [
  {
    day: 1,
    title: 'Python & NumPy cơ bản',
    sub: 'Module B · Lập trình',
    path: '/day/1',
    lessons: [
      { slug: 'day1-python-basics', title: 'Python cơ bản', time: '12 phút' },
      { slug: 'day1-numpy-basics', title: 'NumPy cơ bản', time: '14 phút' },
    ],
    quizId: 'day1',
    quizTitle: 'Kiểm tra nhanh Ngày 1',
  },
  {
    day: 2,
    title: 'Đại số tuyến tính',
    sub: 'Module A · Toán học',
    path: '/day/2',
    lessons: [
      { slug: 'day2-vector-matrix', title: 'Vector & Ma trận', time: '14 phút' },
      { slug: 'day2-matrix-inverse', title: 'Ma trận nghịch đảo', time: '10 phút' },
    ],
    quizId: 'day2',
    quizTitle: 'Kiểm tra nhanh Ngày 2',
  },
  {
    day: 3,
    title: 'Trị riêng & Thống kê',
    sub: 'Module A · Toán học',
    path: '/day/3',
    lessons: [
      { slug: 'day3-eigen', title: 'Trị riêng & Vector riêng', time: '12 phút' },
      { slug: 'day3-statistics', title: 'Thống kê cơ bản', time: '12 phút' },
    ],
    quizId: 'day3',
    quizTitle: 'Kiểm tra nhanh Ngày 3',
  },
  {
    day: 4,
    title: 'Pandas & Xử lý dữ liệu',
    sub: 'Module B · Lập trình & Dữ liệu',
    path: '/day/4',
    lessons: [
      { slug: 'day4-pandas', title: 'Pandas cơ bản', time: '16 phút' },
      { slug: 'day4-data-processing', title: 'Xử lý dữ liệu', time: '14 phút' },
    ],
    quizId: 'day4',
    quizTitle: 'Kiểm tra nhanh Ngày 4',
  },
  {
    day: 5,
    title: 'AI, ML & Hồi quy',
    sub: 'Module C · Kiến thức AI',
    path: '/day/5',
    lessons: [
      { slug: 'day5-ai-ml-dl', title: 'AI vs ML vs Học sâu', time: '10 phút' },
      { slug: 'day5-linear-regression', title: 'Hồi quy tuyến tính', time: '15 phút' },
      { slug: 'day5-logistic-regression', title: 'Hồi quy logistic', time: '14 phút' },
      { slug: 'day5-derivative', title: 'Đạo hàm & Gradient', time: '12 phút' },
      { slug: 'day5-gradient-descent', title: 'Gradient Descent', time: '13 phút' },
      { slug: 'day5-kmeans', title: 'K-Means (Gom cụm)', time: '14 phút' },
      { slug: 'day5-ml-workflow', title: 'Quy trình ML & Overfitting', time: '12 phút' },
    ],
    quizId: 'day5',
    quizTitle: 'Kiểm tra nhanh Ngày 5',
  },
  {
    day: 6,
    title: 'Logic, Đạo đức & MVP',
    sub: 'Module C & D · Sản phẩm & Ứng xử',
    path: '/day/6',
    lessons: [
      { slug: 'day6-logic-behavior', title: 'Logic & Ứng xử', time: '10 phút' },
      { slug: 'day6-ai-ethics', title: 'Đạo đức AI', time: '10 phút' },
      { slug: 'day6-mvp', title: 'Tư duy sản phẩm MVP', time: '12 phút' },
    ],
    quizId: 'mini-mock-day6',
    quizTitle: 'Thi thử nhỏ Ngày 6',
    isMiniMock: true,
  },
  {
    day: 7,
    title: 'CNN & Học sâu (cơ bản)',
    sub: 'Module C · Kiến thức AI',
    path: '/day/7',
    lessons: [
      { slug: 'day7-cnn-convolution', title: 'CNN & Phép tích chập', time: '10 phút' },
    ],
    quizId: 'day7-cnn-convolution',
    quizTitle: 'Kiểm tra nhanh Ngày 7',
  },
]

export const MODULES = [
  { code: 'A', name: 'Toán học & Tư duy định lượng', pct: '25%', days: 'Ngày 2–3' },
  { code: 'B', name: 'Lập trình & Xử lý dữ liệu', pct: '35%', days: 'Ngày 1 & 4' },
  { code: 'C', name: 'Kiến thức AI & Tư duy sản phẩm AI', pct: '25%', days: 'Ngày 5–6' },
  { code: 'D', name: 'Logic, Đạo đức & Ứng xử AI', pct: '15%', days: 'Ngày 6' },
]

export function getDay(dayNumber) {
  return DAYS.find((d) => d.day === dayNumber)
}

export function getDayByLessonSlug(slug) {
  return DAYS.find((d) => d.lessons.some((l) => l.slug === slug))
}
