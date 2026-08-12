// Ôn tập tự luận — MVP (7 câu) · tư duy sản phẩm.
// Dạng câu trả lời mở — đọc đề, tự trình bày, rồi mở đáp án mẫu so sánh.
export default {
  id: 'mvp',
  label: 'MVP',
  order: 3,
  desc: '7 câu · tư duy sản phẩm',
  questions: [
    {
      id: 'mvp-e01',
      section: 'mvp',
      topic: 'Chọn feature set',
      difficulty: 'Trung bình',
      question:
        'Team bạn có 4 tuần để xây MVP cho app gọi đồ ăn. Liệt kê 3 tính năng tối thiểu (feature set) và giải thích vì sao bạn LOẠI các tính năng còn lại như đánh giá 5 sao, voucher giảm giá, theo dõi shipper trực tiếp.',
      answerText:
        'Feature set MVP: (1) Xem menu + đặt món từ nhà hàng; (2) Thanh toán đơn giản (hoặc COD); (3) Giao đơn + cập nhật trạng thái cơ bản. Lý do loại: mỗi tính năng thêm làm tăng thời gian/chi phí build mà không trực tiếp kiểm thử giả định cốt lõi "người dùng có muốn đặt đồ ăn qua app để được giao đến nhà không". Đánh giá, voucher, live tracking là nice-to-have — thêm sau khi đã có phản hồi thật.',
      steps: [
        'Xác định giả định cốt lõi: giá trị số 1 người dùng cần là gì?',
        'Chỉ giữ tính năng BẮT BUỘC để vòng lặp "đặt → nhận món → trả tiền" chạy được.',
        'Với mỗi tính năng bị loại, tự hỏi: thiếu nó thì người dùng còn dùng được không?',
        'Sắp xếp thứ tự xây theo: cái nào tối thiểu thì làm trước.',
      ],
      tip: 'Nguyên tắc chấm điểm: trả lời phải gọi tên GIẢ ĐỊNH cốt lõi và dùng nó làm tiêu chí loại tính năng.',
    },
    {
      id: 'mvp-e02',
      section: 'mvp',
      topic: 'MVP ≠ bản cắt giảm',
      difficulty: 'Trung bình',
      question:
        'Vì sao nói "MVP không phải là bản cắt giảm tính năng của sản phẩm hoàn chỉnh"? Nêu 2 sai lầm phổ biến khi xây MVP.',
      answerText:
        'MVP là một PHƯƠNG PHÁP học hỏi, không phải phiên bản rút gọn. Mục tiêu là kiểm thử giả định quan trọng nhất với chi phí ít nhất — MVP khi ra đời thường có hình thù khác hẳn sản phẩm cuối. Sai lầm 1: gộp nhiều tính năng "tối thiểu" lại thành bản cut-down cả sản phẩm (phình scope). Sai lầm 2: xây tính năng mà KHÔNG định nghĩa trước sẽ học được gì / metric nào quyết định việc đi tiếp (build vô định hướng).',
      steps: [
        'Định nghĩa lại MVP: nhỏ nhất đủ để HỌC về người dùng, không phải nhỏ nhất đủ để bán.',
        'Nêu ít nhất 1 sai lầm về độ phình scope: nhiều nhóm nhầm lẫn "thêm đủ tính năng để complete" thành MVP.',
        'Nêu ít nhất 1 sai lầm về thiếu tiêu chí đo: xây xong mà không biết thế nào là thành công.',
        'Kết luận bằng câu một dòng: MVP đo lường giả định, không phải hoàn thiện sản phẩm.',
      ],
      tip: 'Từ khoá ăn điểm: hypothesis (giả định), learning (học hỏi), iterate (lặp lại).',
    },
    {
      id: 'mvp-e03',
      section: 'mvp',
      topic: 'Giả định cần validate',
      difficulty: 'Khó',
      question:
        'Trước khi viết dòng code đầu tiên của MVP app học tiếng Anh, hãy liệt kê 3 giả định quan trọng nhất cần validate và cách validate rẻ nhất cho từng giả định.',
      answerText:
        '(1) Người dùng thực sự muốn học bằng bài tập ngắn 5 phút → validate bằng landing page + nút "Đăng ký" hoặc phỏng vấn 10 người. (2) Người dùng sẵn sàng trả phí → bán trước (pre-sale) hoặc hỏi mức giá chấp nhận. (3) Người dùng quay lại ngày thứ 2 → kiểm tra retention trên bản làm bằng tay (concierge / Wizard of Oz). Nguyên tắc: validate giả định rủi ro nhất trước, bằng cách rẻ nhất.',
      steps: [
        'Giả định 1 — nhu cầu: người ta có muốn dùng hình thức này không → phishing/landing test.',
        'Giả định 2 — khả năng trả tiền: mô hình doanh thu có đứng không → pre-sale hoặc hỏi giá.',
        'Giả định 3 — hành vi lặp lại: thói quen có được tạo không → đo retention trên bản thủ công.',
        'Sắp thứ tự: xử lý giả định nào sai gây tốn kém nhất trước.',
      ],
      tip: 'Đáp án chuẩn luôn đi kèm cặp (giả định → cách validate cụ thể, không nói chung chung "khảo sát thị trường").',
    },
    {
      id: 'mvp-e04',
      section: 'mvp',
      topic: 'Ưu tiên tính năng',
      difficulty: 'Khó',
      question:
        'Chọn 3 tính năng cho MVP của app "đặt sân bóng online" từ 6 ứng viên: (a) tìm sân theo khu vực, (b) đặt & huỷ sân, (c) thanh toán online, (d) chat với chủ sân, (e) bảng xếp hạng đội, (f) đánh giá chất lượng sân. Giải thích tiêu chí bạn loại 3 tính năng còn lại.',
      answerText:
        'MVP: (a) tìm sân, (b) đặt & huỷ, (c) thanh toán đơn giản (hoặc COD). Loại (d) chat, (e) bảng xếp hạng, (f) đánh giá vì chúng không nằm trên con đường giá trị cốt lõi "tìm được chỗ — chắc chắn còn sân — không mất tiền oan". Tiêu chí: tính năng nào thiếu thì vòng lặp nghiệp vụ không chạy → must-have; phần còn lại vận hành được thủ công (chat qua điện thoại) hoặc bổ sung sau khi đã có khách thật → nice-to-have.',
      steps: [
        'Vẽ vòng lặp cốt lõi của app: tìm sân → đặt → xác nhận → thanh toán/giữ chỗ.',
        'Đối chiếu từng tính năng: nó có nằm trên vòng lặp đó không?',
        'Nhóm (a),(b),(c) → bắt buộc; (d),(e),(f) → có thể làm thủ công hoặc để sau.',
        'Kết luận bằng cách nêu tiêu chí phân loại must-have vs nice-to-have.',
      ],
      tip: 'Câu này chấm theo LÝ DO, không chỉ theo danh sách chọn — luôn kèm tiêu chí loại tính năng.',
    },
    {
      id: 'mvp-e05',
      section: 'mvp',
      topic: 'Metric đo thành công',
      difficulty: 'Khó',
      question:
        'Chọn 2 metric chính để đo MVP app giao đồ ăn trong 8 tuần đầu và giải thích vì sao không nên dùng tổng đơn hàng làm metric duy nhất.',
      answerText:
        'Metric chính: (1) Tỉ lệ khách đặt lại trong 14 ngày (retention) — chứng minh sản phẩm có giá trị lặp lại; (2) Thời gian hoàn thành đơn từ đặt đến nhận hàng — chứng minh vòng lặp cốt lõi chạy được. Tổng đơn hàng là vanity metric: tăng nhờ chiết khấu, quảng cáo mà không cho biết người dùng có THẬT SỰ cần sản phẩm hay không.',
      steps: [
        'Chọn metric phản ánh GIÁ TRỊ lặp lại (retention), không phải lượng giao dịch thuần.',
        'Chọn metric phản ánh CHẤT LƯỢNG vòng lặp cốt lõi (thời gian hoàn thành đơn).',
        'Chỉ ra tổng đơn hàng dễ bị bơm phồng bởi khuyến mãi → đánh lừa khi đo nhu cầu thật.',
        'Mỗi metric đều gắn với một giả định cốt lõi của MVP.',
      ],
      tip: 'Từ khoá ăn điểm: vanity metric, retention, core loop — đây là cụm từ người chấm tìm thấy.',
    },
    {
      id: 'mvp-e06',
      section: 'mvp',
      topic: 'Pivot vs Persevere',
      difficulty: 'Khó',
      question:
        'Sau 4 tuần MVP, 30% người dùng quay lại ở tuần 2 nhưng 70% chê thời gian giao quá lâu. Bạn pivot hay persevere? Trình bày quyết định và 1 thí nghiệm để xác nhận.',
      answerText:
        'Chưa pivot vội: 30% retention là tín hiệu có nhu cầu thật, vấn đề nằm ở vòng lặp giao — vẫn trong phạm vi cải thiện MVP. Persevere kèm thí nghiệm: chỉ nhận đơn đặt TRƯỚC giờ X và hẹn giờ giao cố định trong 2 tuần; nếu retention tăng >45% → giữ hướng; nếu không cải thiện → mới xem xét pivot sang mô hình khác (đặt trước bữa, không giao ngay).',
      steps: [
        'Phân tích dấu hiệu: nhu cầu có thật không? (có — 30% quay lại).',
        'Xác định vấn đề thuộc giả định cốt lõi hay thuộc khâu vận hành (giao hàng = vận hành).',
        'Chọn persist (cải thiện vòng lặp) vì vẫn còn kỳ vọng học được từ phản hồi.',
        'Đề xuất 1 thí nghiệm có metric rõ ràng (ngưỡng retention) để quyết định tiếp.',
      ],
      tip: 'Pivot chỉ khi giả định cốt lõi sai. Lỗi của 70% nằm ở vận hành, không phải ở nhu cầu.',
    },
    {
      id: 'mvp-e07',
      section: 'mvp',
      topic: 'Case khó: MVP cho sản phẩm AI',
      difficulty: 'Khó',
      question:
        'Team 2 người, 6 tuần, không ngân sách quảng cáo. Cần xây MVP cho chatbot nội bộ giúp nhân viên tra quy định công ty. Thiết kế MVP (phạm vi, cách xử lý khi AI sai, cách đo) và rủi ro lớn nhất phải validate từ đầu.',
      answerText:
        'Scope MVP: nhập câu hỏi tự do → trả về 3 đoạn quy định liên quan kèm link tài liệu gốc (dùng retrieval trên kho tài liệu, KHÔNG sinh câu trả lời tự do để tránh hallucination). Nút "Câu trả lời này đúng không (👍/👎)" để gắn cờ. Xử lý khi AI sai: luôn hiển thị nguồn tài liệu, không trả lời khi độ tin cậy thấp. Đo: (1) % câu hỏi trả về được nguồn có thật; (2) % người dùng bấm 👍. Rủi ro lớn nhất: chất lượng retrieval trên tài liệu thật — nếu retrieval không đúng quy định thì mọi thứ phía sau vô nghĩa; phải validate trước bằng 50 câu hỏi thật, đo tỉ lệ trả đúng nguồn trước khi xây giao diện.',
      steps: [
        'Thu nhỏ phạm vi: chỉ Q&A tra quy định (một use-case, không chatbot tổng quát).',
        'Chọn kiến trúc an toàn: retrieval kèm nguồn gốc thay vì sinh câu trả lời tự do.',
        'Xử lý sai sót: luôn trích nguồn, từ chối khi không chắc — giảm hallucination.',
        'Xác định metric + giả định rủi ro nhất (chất lượng retrieval) để validate trước.',
      ],
      tip: 'Câu AI khó thường hướng tới: kiến trúc an toàn (retrieval), từ chối khi không chắc, và validate giả định rủi ro nhất trước khi xây.',
    },
  ],
}