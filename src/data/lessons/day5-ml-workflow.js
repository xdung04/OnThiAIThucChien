export default {
  slug: 'day5-ml-workflow',
  title: 'Quy trình ML & Overfitting',
  subtitle: 'Chia train/test, hồi quy vs phân loại, overfitting vs underfitting',
  module: 'Module C · Kiến thức AI',
  time: '12 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Nắm các bước của quy trình ML, vì sao chia dữ liệu thành train/test, và sự khác biệt giữa overfitting và underfitting.',
  quizId: 'day5-ml-workflow',
  objectives: [
    'Hiểu quy trình học máy',
    'Biết vì sao chia dữ liệu thành train và test',
    'Hiểu overfitting và underfitting',
  ],
  whatIsIt: [
    'Quy trình học máy là quá trình từng bước xây dựng một mô hình.',
    'Chúng ta chia dữ liệu thành tập huấn luyện và tập kiểm thử.',
    'Overfitting và underfitting mô tả mô hình học tốt đến mức nào.',
  ],
  whyImportant: [
    'Quy trình ML là chủ đề được xác nhận.',
    'Chia train/test và overfitting là câu hỏi phổ biến.',
    'Hiểu các khái niệm này giúp trả lời câu hỏi tình huống.',
  ],
  keyConcepts: [
    'Quy trình: thu thập dữ liệu → làm sạch → chia → huấn luyện → kiểm thử → đánh giá',
    'Tập train: dùng để dạy mô hình',
    'Tập test: dùng để kiểm tra mô hình trên dữ liệu mới',
    'Hồi quy: dự đoán một số',
    'Phân loại: dự đoán một nhãn',
    'Overfitting: mô hình học quá kỹ dữ liệu train, hỏng trên dữ liệu mới',
    'Underfitting: mô hình quá đơn giản, hoạt động kém trên cả hai',
  ],
  examples: [
    {
      code: `# Quy trình khái niệm (không chạy được)
# 1. Thu thập dữ liệu
# 2. Làm sạch dữ liệu (bỏ thiếu/trùng)
# 3. Chia thành train và test
# 4. Huấn luyện mô hình trên tập train
# 5. Kiểm thử mô hình trên tập test
# 6. Đánh giá hiệu năng`,
      note: 'Đây là quy trình ML chuẩn.',
    },
    {
      code: `# Ý tưởng: chia train/test
# 80% dữ liệu → train, 20% → test
# Mô hình học các mẫu từ train
# Mô hình được kiểm tra trên test (dữ liệu chưa thấy)`,
      note: 'Tập test chứa dữ liệu mô hình chưa từng thấy.',
    },
  ],
  assessmentQs: [
    'Vì sao chia dữ liệu thành train và test?',
    'Khác biệt giữa hồi quy và phân loại là gì?',
    'Overfitting là gì?',
    'Underfitting là gì?',
    'Bước đầu tiên của quy trình ML là gì?',
  ],
  mistakes: [
    'Nghĩ tập test dùng để huấn luyện — không phải.',
    'Nhầm overfitting (quá phức tạp) với underfitting (quá đơn giản).',
    'Quên hồi quy dự đoán số, phân loại dự đoán nhãn.',
    'Bỏ qua bước làm sạch dữ liệu trong quy trình.',
  ],
  summary: [
    'Quy trình ML: thu thập → làm sạch → chia → huấn luyện → kiểm thử → đánh giá.',
    'Tập train dạy mô hình; tập test kiểm tra trên dữ liệu mới.',
    'Hồi quy dự đoán số; phân loại dự đoán nhãn.',
    'Overfitting = quá phức tạp; underfitting = quá đơn giản.',
  ],
  cheatSheet: [
    { term: 'Quy trình', def: 'thu thập → làm sạch → chia → train → test → đánh giá' },
    { term: 'Tập train', def: 'dữ liệu dùng để dạy mô hình' },
    { term: 'Tập test', def: 'dữ liệu chưa thấy để kiểm tra mô hình' },
    { term: 'Hồi quy', def: 'dự đoán một số' },
    { term: 'Phân loại', def: 'dự đoán một nhãn' },
    { term: 'Overfitting', def: 'học quá kỹ train, hỏng trên dữ liệu mới' },
    { term: 'Underfitting', def: 'quá đơn giản, kém trên cả hai' },
  ],
}
