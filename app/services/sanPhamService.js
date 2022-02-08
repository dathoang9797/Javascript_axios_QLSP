class SanPhamService {
  #baseURL = 'https://5d6ec5ac777f670014036bb9.mockapi.io/sanpham';
  constructor() {
    this.sanPhamAPI = axios.create({
      baseURL: this.#baseURL,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
  }

  layDanhSachSanPham() {
    return this.sanPhamAPI.get('/');
  }

  layChiTietSanPham(maSanPham) {
    return this.sanPhamAPI.get('/' + maSanPham);
  }

  themSanPham(sanPham) {
    return this.sanPhamAPI.post('/', sanPham);
  }

  capNhatSanPham(maSanPham, sanPham) {
    return this.sanPhamAPI.put('/' + maSanPham, sanPham);
  }

  xoaSanPham(maSanPham) {
    return this.sanPhamAPI.delete('/' + maSanPham);
  }
}
