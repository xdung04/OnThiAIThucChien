export default {
  slug: 'day5-ai-ml-dl',
  title: 'AI vs Học máy vs Học sâu',
  subtitle: 'Hiểu sự khác biệt giữa ba thuật ngữ',
  module: 'Module C · Kiến thức AI',
  time: '10 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Nhớ mối quan hệ: AI là rộng nhất, ML là tập con, Học sâu (Deep Learning) là tập con của ML. Câu hỏi thường kiểm tra thứ bậc này.',
  quizId: 'day5-ai-ml-dl',
  objectives: [
    'Hiểu sự khác biệt giữa AI, ML và Học sâu (Deep Learning)',
    'Biết khái niệm nào rộng nhất',
    'Nhận biết ví dụ của từng loại',
  ],
  whatIsIt: [
    'AI (Trí tuệ nhân tạo) là lĩnh vực rộng làm cho máy móc hành xử thông minh.',
    'Học máy (Machine Learning - ML) là tập con của AI, nơi máy học từ dữ liệu.',
    'Học sâu (Deep Learning) là tập con của ML dùng nhiều lớp tính toán.',
  ],
  whyImportant: [
    'Module C (Kiến thức AI) chiếm 25% kỳ đánh giá.',
    'Hiểu thứ bậc là một câu hỏi cơ bản phổ biến.',
    'Nó giúp bạn trả lời các câu hỏi khái niệm AI khác.',
  ],
  keyConcepts: [
    'AI là nhóm lớn nhất',
    'ML nằm trong AI',
    'Học sâu nằm trong ML',
    'ML học các mẫu từ dữ liệu',
    'Học sâu dùng nhiều lớp (mạng sâu)',
  ],
  examples: [
    {
      code: `# Thứ bậc khái niệm (không phải code)
AI
  └── Machine Learning
        └── Deep Learning`,
      note: 'AI là rộng nhất. ML là tập con. Học sâu là tập con của ML.',
    },
    {
      code: `# Ví dụ
AI: chương trình cờ vua chơi tốt
ML: mô hình dự đoán giá nhà từ dữ liệu
Deep Learning: mô hình nhận dạng ảnh dùng nhiều lớp`,
      note: 'Mỗi ví dụ nằm trong nhóm trước đó.',
    },
  ],
  assessmentQs: [
    'Cái nào rộng nhất: AI, ML hay Học sâu?',
    'Học sâu có phải là tập con của ML không?',
    'ML học từ đâu?',
    'Nhận dạng ảnh thường thuộc nhóm nào?',
  ],
  mistakes: [
    'Nghĩ AI và ML là một.',
    'Nghĩ Học sâu lớn hơn ML.',
    'Quên rằng ML học từ dữ liệu.',
    'Nhầm thứ bậc của các khái niệm.',
  ],
  summary: [
    'AI là lĩnh vực rộng nhất.',
    'ML là tập con của AI, học từ dữ liệu.',
    'Học sâu là tập con của ML dùng nhiều lớp.',
  ],
  cheatSheet: [
    { term: 'AI', def: 'rộng nhất: máy hành xử thông minh' },
    { term: 'ML', def: 'tập con của AI: học từ dữ liệu' },
    { term: 'Deep Learning', def: 'tập con của ML: nhiều lớp' },
    { term: 'Thứ bậc', def: 'AI ⊃ ML ⊃ Học sâu' },
  ],
}
