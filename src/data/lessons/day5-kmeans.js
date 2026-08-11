export default {
  slug: 'day5-kmeans',
  title: 'K-Means (Gom cụm)',
  subtitle: 'Phân nhóm điểm, tính centroid, chạy vòng lặp',
  module: 'Module C · Kiến thức AI',
  time: '14 phút',
  difficulty: 'Easy',
  importance: 'High',
  assessmentTip: 'Nhớ 4 bước: chọn K → gán mỗi điểm cho centroid gần nhất (dùng khoảng cách) → tính centroid mới = trung bình cụm → lặp đến khi hội tụ. Có thể được hỏi tính khoảng cách hoặc centroid bằng tay.',
  quizId: 'day5-kmeans',
  objectives: [
    'Hiểu K là số cụm',
    'Tính khoảng cách điểm → centroid',
    'Gán điểm vào centroid gần nhất',
    'Tính centroid = trung bình của cụm',
    'Nhận biết hội tụ khi cụm không đổi',
  ],
  whatIsIt: [
    'K-Means gom các điểm vào K nhóm (cụm) dựa trên độ gần nhau.',
    'Mỗi cụm được đại diện bởi một centroid (tâm cụm).',
    'Mỗi điểm được gán cho centroid gần nhất, rồi centroid được tính lại.',
  ],
  whyImportant: [
    'K-Means là thuật toán gom cụm phổ biến có thể xuất hiện trong kỳ đánh giá.',
    'Có thể được hỏi tính khoảng cách điểm tới centroid hoặc tính centroid của một cụm.',
    'Hiểu vòng lặp và hội tụ giúp trả lời câu hỏi quy trình.',
  ],
  keyConcepts: [
    'K: số cụm (cluster)',
    'Centroid: tâm của cụm = trung bình các điểm trong cụm',
    'Khoảng cách (Euclid): √(Δx² + Δy²) giữa hai điểm',
    'Gán điểm: chọn centroid gần nhất',
    'Cập nhật centroid: tính mean của các điểm trong cụm',
    'Hội tụ: khi cụm (hoặc centroid) không đổi nữa → dừng',
  ],
  examples: [
    {
      code: `# Khoang cach Euclid giua 2 diem (khong chay duoc)
# diem P(3, 4), centroid C(1, 2)
# d = sqrt((3-1)^2 + (4-2)^2) = sqrt(4 + 4) = sqrt(8) ~ 2.83
# So khoang cach voi centroid khac de gan nhan`,
      note: 'Tính khoảng cách từ điểm đến từng centroid, gán điểm cho centroid gần nhất.',
    },
    {
      code: `# Tinh centroid moi = trung binh cac diem trong cum
# Cum A gom: (1,2), (3,2)
# centroid = ( (1+3)/2 , (2+2)/2 ) = (2, 2)
# Cum B gom: (8,8), (9,7), (10,9)
# centroid = ( (8+9+10)/3 , (8+7+9)/3 ) = (9, 8)`,
      note: 'Centroid mới là trung bình của các điểm trong cụm. Lặp gán-giá đến khi hội tụ.',
    },
  ],
  assessmentQs: [
    'K trong K-Means đại diện cho gì?',
    'Tính khoảng cách từ điểm (3,4) đến centroid (1,2).',
    'Điểm nên được gán cho centroid nào?',
    'Centroid của một cụm được tính thế nào?',
    'Khi nào K-Means hội tụ (dừng lại)?',
  ],
  mistakes: [
    'Nhầm K (số cụm) với thứ gì khác.',
    'Quên lấy căn bậc hai khi tính khoảng cách Euclid.',
    'Tính centroid bằng cách lấy trung vị thay vì trung bình.',
    'Gán điểm cho centroid xa hơn thay vì gần nhất.',
    'Không biết hội tụ nghĩa là cụm không đổi.',
  ],
  summary: [
    'Flow nhớ nhanh: K → khoảng cách → gán cụm gần nhất → centroid mới = trung bình → lặp đến hội tụ.',
    'K là số cụm.',
    'Khoảng cách Euclid: √(Δx² + Δy²).',
    'Gán điểm vào centroid gần nhất.',
    'Centroid mới = trung bình cụm; hội tụ khi cụm không đổi.',
  ],
  cheatSheet: [
    { term: 'K', def: 'số cụm (cluster)' },
    { term: 'Khoảng cách', def: '√(Δx² + Δy²)' },
    { term: 'Gán điểm', def: 'centroid gần nhất' },
    { term: 'Centroid', def: 'trung bình các điểm trong cụm' },
    { term: 'Vòng lặp', def: 'gán → cập nhật centroid → lặp' },
    { term: 'Hội tụ', def: 'cụm/centroid không đổi → dừng' },
  ],
}
