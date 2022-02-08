const SanPhamSV = new SanPhamService();
const sanPhamMD = new SanPhamModel();
const sanPhamController = new SanPhamController();

sanPhamController.hienThiSanPham();
document.getElementById('themSP').addEventListener('click', () => {
  sanPhamController.themSanPham();
});

document.getElementById('capNhapSP').addEventListener('click', function () {
  sanPhamController.capNhatSanPham();
});
