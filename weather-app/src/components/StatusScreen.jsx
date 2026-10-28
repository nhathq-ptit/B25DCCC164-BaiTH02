export default function StatusScreen({ status, onRetry }) {
  if (status === 'unselected') return <div className="status">Vui lòng chọn một thành phố</div>;
  if (status === 'loading') return <div className="status">Đang tải dữ liệu...</div>;
  if (status === 'error') return (
    <div className="status error">
      <p>Lỗi tải dữ liệu thời tiết</p>
      <button onClick={onRetry}>Thử lại</button>
    </div>
  );
  return null;
}