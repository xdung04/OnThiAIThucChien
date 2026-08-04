export default {
  slug: 'day6-ai-ethics',
  title: 'Đạo đức AI',
  subtitle: 'Thiên kiến, quyền riêng tư, ảo giác và AI có trách nhiệm',
  module: 'Module D · Logic, Đạo đức & Ứng xử AI',
  time: '10 phút',
  difficulty: 'Beginner',
  importance: 'Medium',
  assessmentTip: 'Câu hỏi đạo đức thường là tình huống. Nắm các thuật ngữ then chốt: bias, privacy, hallucination, responsible AI. Chọn đáp án công bằng, an toàn và minh bạch.',
  quizId: 'day6-ai-ethics',
  objectives: [
    'Hiểu thiên kiến AI (AI bias) và vì sao nó quan trọng',
    'Hiểu các mối lo về quyền riêng tư trong AI',
    'Hiểu ảo giác (hallucination) và AI có trách nhiệm',
  ],
  whatIsIt: [
    'Đạo đức AI là về việc xây dựng và dùng AI một cách công bằng và an toàn.',
    'Thiên kiến: AI có thể học các mẫu bất công từ dữ liệu thiên lệch.',
    'Quyền riêng tư: AI phải bảo vệ dữ liệu cá nhân của người dùng.',
    'Ảo giác: AI có thể tự tin đưa ra thông tin sai.',
  ],
  whyImportant: [
    'Module D chiếm 15% kỳ đánh giá.',
    'Câu hỏi tình huống về đạo đức rất phổ biến.',
    'Nắm các thuật ngữ then chốt giúp bạn trả lời đúng.',
  ],
  keyConcepts: [
    'Thiên kiến (bias): kết quả bất công do dữ liệu huấn luyện thiên lệch',
    'Quyền riêng tư: bảo vệ dữ liệu cá nhân',
    'Ảo giác (hallucination): AI bịa ra thông tin sai',
    'AI có trách nhiệm: công bằng, an toàn, minh bạch, chịu trách nhiệm',
    'Đáp án tốt nhất ưu tiên sự công bằng và an toàn',
  ],
  examples: [
    {
      code: `# Ví dụ về thiên kiến
# Mô hình tuyển dụng học từ dữ liệu quá khứ
# có thể ưu ái bất công một nhóm.
# Khắc phục: dùng dữ liệu công bằng, cân bằng và kiểm tra thiên kiến.`,
      note: 'Thiên kiến bắt nguồn từ dữ liệu mà mô hình học.',
    },
    {
      code: `# Ví dụ về ảo giác
# Một AI tự tin khẳng định một sự thật sai.
# Đây gọi là ảo giác (hallucination).
# Khắc phục: kiểm chứng đầu ra AI bằng nguồn đáng tin cậy.`,
      note: 'Ảo giác nghĩa là AI bịa ra thông tin một cách tự tin.',
    },
  ],
  assessmentQs: [
    'Thiên kiến AI là gì?',
    'Vì sao quyền riêng tư quan trọng trong AI?',
    'Ảo giác là gì?',
    'AI có trách nhiệm nghĩa là gì?',
    'Bạn nên xử lý kết quả AI thiên lệch thế nào?',
  ],
  mistakes: [
    'Nghĩ thiên kiến chỉ liên quan mô hình — nó đến từ dữ liệu.',
    'Nhầm ảo giác với một lỗi đơn giản.',
    'Chọn đáp án bỏ qua quyền riêng tư hoặc sự công bằng.',
    'Quên rằng AI có trách nhiệm là công bằng, an toàn và minh bạch.',
  ],
  summary: [
    'Thiên kiến đến từ dữ liệu huấn luyện thiên lệch.',
    'Quyền riêng tư nghĩa là bảo vệ dữ liệu cá nhân.',
    'Ảo giác là AI bịa ra thông tin sai.',
    'AI có trách nhiệm là công bằng, an toàn và minh bạch.',
  ],
  cheatSheet: [
    { term: 'Bias', def: 'kết quả bất công từ dữ liệu thiên lệch' },
    { term: 'Privacy', def: 'bảo vệ dữ liệu cá nhân' },
    { term: 'Hallucination', def: 'AI bịa ra thông tin sai' },
    { term: 'Responsible AI', def: 'công bằng, an toàn, minh bạch, chịu trách nhiệm' },
  ],
}
