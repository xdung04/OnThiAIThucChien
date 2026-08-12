// Ôn tập tự luận — Pandas (20 bài) · kiểu LeetCode (viết code), tính tay.
// Mỗi bài: đề bài + hàm cần viết (signature) + ví dụ input/output + lời giải mẫu.
export default {
  id: 'pandas',
  label: 'Pandas',
  order: 2,
  desc: '20 bài · viết code · tính tay',
  questions: [
    {
      id: 'pd-l01',
      section: 'pandas',
      topic: 'Filter boolean',
      difficulty: 'Trung bình',
      problem: 'Write a function returning only the rows whose value in column `col` is greater than `t`.',
      signature: 'def filter_above(df, col, t):',
      examples: [
        { input: 'filter_above(df, "score", 6)  # score = [7, 5, 8]', output: 'chỉ giữ 2 hàng score 7 và 8' },
      ],
      constraints: 'Chỉ dùng boolean mask, không dùng vòng lặp.',
      answerCode: `def filter_above(df, col, t):
    return df[df[col] > t]`,
      steps: [
        'df[col] > t tạo boolean Series theo từng hàng.',
        'df[mask] giữ lại đúng các hàng có mask True.',
      ],
      edgeCases: 'Kết quả vẫn là DataFrame (có thể rỗng), không phải Series.',
      tip: 'Lọc bằng mask là cách chuẩn của pandas — không bao giờ dùng vòng lặp.',
    },
    {
      id: 'pd-l02',
      section: 'pandas',
      topic: 'Đếm theo điều kiện',
      difficulty: 'Trung bình',
      problem: 'Write a function counting how many rows have column `col` equal to `val`.',
      signature: 'def count_matches(df, col, val):',
      examples: [
        { input: 'count_matches(df, "city", "HN")  # city = [HN, HCM, HN]', output: '2' },
      ],
      constraints: 'Trả về số nguyên.',
      answerCode: `def count_matches(df, col, val):
    return (df[col] == val).sum()`,
      steps: [
        'df[col] == val tạo boolean Series.',
        '.sum() đếm số True (True tính như 1).',
      ],
      edgeCases: 'Nếu không có hàng nào khớp → trả 0.',
      tip: 'Cách đếm "có bao nhiêu dòng thoả điều kiện" phổ biến nhất trong đề.',
    },
    {
      id: 'pd-l03',
      section: 'pandas',
      topic: 'Mean bỏ NaN',
      difficulty: 'Khó',
      problem: 'Write a function returning the mean of column `col`, ignoring missing values (NaN).',
      signature: 'def col_mean(df, col):',
      examples: [
        { input: 'col_mean(df, "age")  # age = [20, NaN, 30, NaN]', output: '25.0' },
      ],
      constraints: 'Số nhỏ, dễ tính tay.',
      answerCode: `def col_mean(df, col):
    return df[col].mean()`,
      steps: [
        '.mean() của pandas tự BỎ QUA NaN.',
        '(20 + 30) / 2 = 25.0 (không chia cho 4).',
      ],
      edgeCases: 'Nếu toàn cột là NaN, mean() trả NaN (không báo lỗi).',
      tip: 'mean/median của pandas bỏ NaN mặc định — bẫy hay gặp khi tính tay.',
    },
    {
      id: 'pd-l04',
      section: 'pandas',
      topic: 'groupby + sum',
      difficulty: 'Trung bình',
      problem: 'Write a function grouping by column `key` and returning the SUM of column `val` for each group.',
      signature: 'def group_sum(df, key, val):',
      examples: [
        { input: 'group_sum(df, "team", "pts")  # team=[a, b, a], pts=[3, 5, 7]', output: 'a → 10, b → 5' },
      ],
      constraints: 'Trả về Series, index là giá trị cột key.',
      answerCode: `def group_sum(df, key, val):
    return df.groupby(key)[val].sum()`,
      steps: [
        'groupby(key) gom các hàng có cùng giá trị key.',
        '[val].sum() tính tổng val trong từng nhóm: a=3+7=10, b=5.',
      ],
      edgeCases: 'Index của kết quả là các giá trị của cột key.',
      tip: 'groupby(...)[col].method() là khuôn mẫu cực kỳ phổ biến.',
    },
    {
      id: 'pd-l05',
      section: 'pandas',
      topic: 'groupby + mean',
      difficulty: 'Trung bình',
      problem: 'Write a function grouping by column `key` and returning the MEAN of column `val` for each group.',
      signature: 'def group_mean(df, key, val):',
      examples: [
        { input: 'group_mean(df, "grp", "v")  # grp=[x, x, y], v=[10, 20, 30]', output: 'x → 15.0, y → 30.0' },
      ],
      constraints: 'Trả về Series; mean luôn là float.',
      answerCode: `def group_mean(df, key, val):
    return df.groupby(key)[val].mean()`,
      steps: [
        'Nhóm x = [10, 20] → mean 15.0; nhóm y = [30] → 30.0.',
      ],
      edgeCases: 'mean trả float — nhóm 1 phần tử vẫn ra dạng 30.0.',
      tip: 'So với group_sum (np-l04) để nhớ sự khác biệt sum vs mean.',
    },
    {
      id: 'pd-l06',
      section: 'pandas',
      topic: 'fillna bằng mean',
      difficulty: 'Khó',
      problem: 'Write a function replacing every NaN of column `col` with the MEAN of that column, then returning the updated column.',
      signature: 'def fillna_with_mean(df, col):',
      examples: [
        { input: 'fillna_with_mean(df, "age")  # age = [20, NaN, 40]', output: '[20.0, 30.0, 40.0]' },
      ],
      constraints: 'Mean tính bỏ qua NaN.',
      answerCode: `def fillna_with_mean(df, col):
    return df[col].fillna(df[col].mean())`,
      steps: [
        'mean (bỏ NaN) = (20 + 40) / 2 = 30.0.',
        'fillna(30.0) thay đúng các ô NaN bằng 30.0.',
      ],
      edgeCases: 'fillna trả về bản sao — muốn sửa gốc phải gán lại (hoặc inplace=True).',
      tip: 'Đề hay ghép fillna với mean/median — nhớ mean bỏ NaN trước khi dùng làm giá trị điền.',
    },
    {
      id: 'pd-l07',
      section: 'pandas',
      topic: 'drop_duplicates',
      difficulty: 'Trung bình',
      problem: 'Write a function returning the DataFrame after removing duplicate rows based on column `col`, keeping the FIRST occurrence.',
      signature: 'def dedup(df, col):',
      examples: [
        { input: 'dedup(df, "id")  # id = [1, 2, 1, 3]', output: 'giữ 3 hàng (id 1, 2, 3)' },
      ],
      constraints: 'Chỉ dựa trên một cột để xác định trùng lặp.',
      answerCode: `def dedup(df, col):
    return df.drop_duplicates(col)`,
      steps: [
        'drop_duplicates(col) bỏ các hàng trùng giá trị ở cột đó, giữ lần đầu.',
        'id 1 xuất hiện 2 lần → chỉ giữ hàng đầu.',
      ],
      edgeCases: 'Mặc định keep="first"; dùng keep="last" nếu muốn giữ lần cuối.',
      tip: 'drop_duplicates chỉ xoá hàng, không làm mất cột.',
    },
    {
      id: 'pd-l08',
      section: 'pandas',
      topic: 'sort_values',
      difficulty: 'Trung bình',
      problem: 'Write a function returning the DataFrame sorted by column `col` in DESCENDING order.',
      signature: 'def sort_desc(df, col):',
      examples: [
        { input: 'sort_desc(df, "score")  # score = [7, 9, 5]', output: 'hàng score 9, 7, 5' },
      ],
      constraints: 'Chỉ sắp một cột giảm dần.',
      answerCode: `def sort_desc(df, col):
    return df.sort_values(col, ascending=False)`,
      steps: [
        'sort_values(col, ascending=False) sắp theo cột giảm dần.',
      ],
      edgeCases: 'sort_values trả bản sao; muốn sửa gốc dùng inplace=True.',
      tip: 'ascending mặc định True (tăng dần) — nhớ bật False khi cần giảm.',
    },
    {
      id: 'pd-l09',
      section: 'pandas',
      topic: 'rename cột',
      difficulty: 'Trung bình',
      problem: 'Write a function renaming columns according to a dictionary `mapping` (old → new).',
      signature: 'def rename_cols(df, mapping):',
      examples: [
        { input: 'rename_cols(df, {"a": "x"})', output: 'cột a đổi thành x' },
      ],
      constraints: 'mapping có dạng {tên cũ: tên mới}.',
      answerCode: `def rename_cols(df, mapping):
    return df.rename(columns=mapping)`,
      steps: [
        'rename(columns=mapping) đổi tên các cột có trong mapping.',
      ],
      edgeCases: 'rename trả bản sao — không sửa df gốc trừ khi gán lại.',
      tip: 'Phân biệt rename (đổi tên) với thay đổi dữ liệu bên trong.',
    },
    {
      id: 'pd-l10',
      section: 'pandas',
      topic: 'Thêm cột tính toán',
      difficulty: 'Trung bình',
      problem: 'Write a function adding a new column `new_col` equal to column `col` multiplied by 0.1.',
      signature: 'def add_tax_col(df, col, new_col):',
      examples: [
        { input: 'add_tax_col(df, "price", "tax")  # price = [100, 200]', output: 'tax = [10.0, 20.0]' },
      ],
      constraints: 'Thao tác trên toàn cột, không dùng vòng lặp.',
      answerCode: `def add_tax_col(df, col, new_col):
    df[new_col] = df[col] * 0.1
    return df`,
      steps: [
        'Gán df[new_col] bằng biểu thức trên toàn cột col.',
      ],
      edgeCases: 'Thêm cột trực tiếp vào df hiện tại (sửa gốc).',
      tip: 'Phép toán trên Series pandas là vector hoá — không cần lặp.',
    },
    {
      id: 'pd-l11',
      section: 'pandas',
      topic: 'value_counts',
      difficulty: 'Trung bình',
      problem: 'Write a function returning the count of each distinct value in column `col`, ordered from most to least frequent.',
      signature: 'def category_counts(df, col):',
      examples: [
        { input: 'category_counts(df, "city")  # city = [HN, HCM, HN]', output: 'HN → 2, HCM → 1' },
      ],
      constraints: 'Trả về Series.',
      answerCode: `def category_counts(df, col):
    return df[col].value_counts()`,
      steps: [
        'value_counts() đếm tần suất mỗi giá trị.',
        'Tự động sắp giảm dần theo tần suất.',
      ],
      edgeCases: 'Kết quả là Series, index là các giá trị, giá trị số là tần suất.',
      tip: 'value_counts là câu trả lời chuẩn cho "đếm theo loại" (category).',
    },
    {
      id: 'pd-l12',
      section: 'pandas',
      topic: 'apply',
      difficulty: 'Trung bình',
      problem: 'Write a function applying a function `f` to every element of column `col` and returning the resulting Series.',
      signature: 'def apply_fun(df, col, f):',
      examples: [
        { input: 'apply_fun(df, "x", lambda v: v * 10)  # x = [1, 2]', output: '[10, 20]' },
      ],
      constraints: 'Dùng Series.apply, không dùng vòng lặp.',
      answerCode: `def apply_fun(df, col, f):
    return df[col].apply(f)`,
      steps: [
        'Series.apply(f) chạy hàm f trên từng phần tử của cột.',
      ],
      edgeCases: 'Phân biệt apply (cho từng phần tử) với các phép toán vector hoá.',
      tip: 'Cứ nhớ: cần biến đổi không chuẩn hoá được thì dùng .apply().',
    },
    {
      id: 'pd-l13',
      section: 'pandas',
      topic: 'map theo dict',
      difficulty: 'Khó',
      problem: 'Write a function replacing values of column `col` using dictionary `m`; values NOT in `m` become NaN.',
      signature: 'def map_values(df, col, m):',
      examples: [
        { input: 'map_values(df, "code", {"a": 1, "b": 2})  # code = [a, b, c]', output: '[1, 2, NaN]' },
      ],
      constraints: 'Nguyên tắc map dict có sẵn.',
      answerCode: `def map_values(df, col, m):
    return df[col].map(m)`,
      steps: [
        'Series.map(dict) thay mỗi phần tử theo dict.',
        '"c" không có trong dict → trở thành NaN.',
      ],
      edgeCases: 'map(dict) sinh NaN cho giá trị không có khóa — muốn khác phải fillna sau.',
      tip: 'Phân biệt map (thay theo ánh xạ/từng phần tử) với replace.',
    },
    {
      id: 'pd-l14',
      section: 'pandas',
      topic: 'concat theo hàng',
      difficulty: 'Trung bình',
      problem: 'Write a function stacking two DataFrames `d1` and `d2` vertically (by rows) and resetting the index.',
      signature: 'def concat_rows(d1, d2):',
      examples: [
        { input: 'concat_rows(d1, d2)  # d1 có 2 hàng, d2 có 1 hàng', output: '3 hàng, index 0..2' },
      ],
      constraints: 'Cùng các cột (hoặc chấp nhận NaN cho cột thiếu).',
      answerCode: `def concat_rows(d1, d2):
    return pd.concat([d1, d2], ignore_index=True)`,
      steps: [
        'pd.concat theo axis=0 (mặc định) xếp chồng các hàng.',
        'ignore_index=True gán lại index liên tục 0, 1, 2.',
      ],
      edgeCases: 'Không set ignore_index thì index bị lặp lại từ hai bảng.',
      tip: 'concat nhận một DANH SÁCH các DataFrame.',
    },
    {
      id: 'pd-l15',
      section: 'pandas',
      topic: 'merge',
      difficulty: 'Khó',
      problem: 'Write a function joining two DataFrames `a` and `b` on their common column `on` (default inner join).',
      signature: 'def merge_on(a, b, on):',
      examples: [
        { input: 'merge_on(a, b, "id")  # nối theo cột id', output: 'bảng nối (inner mặc định)' },
      ],
      constraints: 'Cả hai bảng đều có cột `on`.',
      answerCode: `def merge_on(a, b, on):
    return pd.merge(a, b, on=on)`,
      steps: [
        'pd.merge mặc định là inner join — chỉ giữ id có ở cả hai bảng.',
        'Nếu bên phải trùng id, hàng sẽ nhân đôi tương ứng.',
      ],
      edgeCases: 'Mặc định how="inner"; dùng how="left"/"outer" cho join khác.',
      tip: 'Khác concat (xếp chồng) — merge nối theo KHÓA giữa các hàng.',
    },
    {
      id: 'pd-l16',
      section: 'pandas',
      topic: 'iloc theo vị trí',
      difficulty: 'Trung bình',
      problem: 'Write a function returning the row at POSITION `i` (regardless of the index labels).',
      signature: 'def get_row(df, i):',
      examples: [
        { input: 'get_row(df, 2)  # df có index [10, 20, 30]', output: 'hàng thứ 3 (vị trí 2)' },
      ],
      constraints: '0 ≤ i < số hàng.',
      answerCode: `def get_row(df, i):
    return df.iloc[i]`,
      steps: [
        'iloc[i] truy cập theo VỊ TRÍ số nguyên, không quan tâm index label.',
        'i = 2 luôn là hàng thứ 3, dù index là [10, 20, 30].',
      ],
      edgeCases: 'iloc bắt đầu từ 0.',
      tip: 'iloc = integer-location; loc = label-location (xem câu sau).',
    },
    {
      id: 'pd-l17',
      section: 'pandas',
      topic: 'loc theo nhãn',
      difficulty: 'Khó',
      problem: 'Write a function returning the row whose index label equals `label`.',
      signature: 'def get_label(df, label):',
      examples: [
        { input: 'get_label(df, "b")  # index = [a, b, c]', output: 'hàng có nhãn "b"' },
      ],
      constraints: 'label phải tồn tại trong index.',
      answerCode: `def get_label(df, label):
    return df.loc[label]`,
      steps: [
        'loc[label] truy cập theo NHÃN index.',
      ],
      edgeCases: 'Nếu index là số, loc[2] lấy nhãn 2 còn iloc[2] lấy vị trí 2 — kết quả có thể khác.',
      tip: 'Cặp bài "tra cứu": loc theo nhãn, iloc theo vị trí.',
    },
    {
      id: 'pd-l18',
      section: 'pandas',
      topic: 'Filter hai điều kiện',
      difficulty: 'Khó',
      problem: 'Write a function returning rows where `c1 == v1` AND `c2 > t`.',
      signature: 'def filter_two(df, c1, v1, c2, t):',
      examples: [
        { input: 'filter_two(df, "city", "HN", "sales", 15)', output: 'chỉ giữ HN có sales > 15' },
      ],
      constraints: 'Dùng & để kết hợp hai mask boolean.',
      answerCode: `def filter_two(df, c1, v1, c2, t):
    return df[(df[c1] == v1) & (df[c2] > t)]`,
      steps: [
        'Tạo hai boolean mask.',
        'Kết hợp bằng & (mỗi điều kiện phải có ngoặc).',
        'df[mask] giữ các hàng thoả cả hai.',
      ],
      edgeCases: 'Không dùng `and` với Series boolean — phải dùng & kèm ngoặc.',
      tip: 'Muốn HOẶC (OR) dùng | ; muốn phủ định dùng ~.',
    },
    {
      id: 'pd-l19',
      section: 'pandas',
      topic: 'Clip outlier',
      difficulty: 'Khó',
      problem: 'Write a function clipping column `col` so values below `lo` become `lo` and values above `hi` become `hi`.',
      signature: 'def clip_col(df, col, lo, hi):',
      examples: [
        { input: 'clip_col(df, "x", 1, 4)  # x = [0, 3, 5]', output: '[1, 3, 4]' },
      ],
      constraints: 'lo ≤ hi.',
      answerCode: `def clip_col(df, col, lo, hi):
    return df[col].clip(lo, hi)`,
      steps: [
        'Series.clip(lo, hi) kẹp mọi giá trị trong khoảng [lo, hi].',
        '0 → 1 (dưới lo); 5 → 4 (trên hi); 3 giữ nguyên.',
      ],
      edgeCases: 'Giá trị nằm trong khoảng không bị thay đổi.',
      tip: 'clip thường dùng để xử lý outlier trong preprocessing.',
    },
    {
      id: 'pd-l20',
      section: 'pandas',
      topic: 'Tỉ lệ phần trăm',
      difficulty: 'Khó',
      problem: 'Write a function returning the RELATIVE frequency (0–1) of each distinct value in column `col`.',
      signature: 'def value_share(df, col):',
      examples: [
        { input: 'value_share(df, "city")  # city = [HN, HCM, HN]', output: 'HN ≈ 0.667, HCM ≈ 0.333' },
      ],
      constraints: 'Tổng các tỉ lệ bằng 1.',
      answerCode: `def value_share(df, col):
    return df[col].value_counts(normalize=True)`,
      steps: [
        'normalize=True chia số lần xuất hiện cho tổng số phần tử.',
        'HN = 2/3 ≈ 0.667; HCM = 1/3 ≈ 0.333.',
      ],
      edgeCases: 'Bỏ normalize=True thì trả về đếm tuyệt đối (xem pd-l11).',
      tip: 'normalize=True cho xác suất/tỉ lệ thay vì tần suất.',
    },
  ],
}