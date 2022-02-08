class SanPhamController {
  #idEditSanPham = 0;

  renderTableSanPham(dataArr) {
    let html = '';
    dataArr.forEach((sanPham) => {
      html += `
                <tr>
                    <td>${sanPham.id}</td>
                    <td>${sanPham.name}</td>
                    <td>${sanPham.price}</td>
                    <td><img src="${sanPham.image}" alt=""></td>
                    <td>${sanPham.description}</td>
                    <td>
                    <a href="#" class="btn btn-success"data-toggle="modal" data-target="#myModal" onclick="sanPhamController.suaSanPham(${sanPham.id})">Sửa</a>
                    <a href="#" class="btn btn-danger">Xóa</a>
                    </td>
                </tr>
                `;
    });
    document.getElementById('tblDanhSachSP').innerHTML = html;
  }

  async hienThiSanPham() {
    const { data: sanPhamDanhSachAPI } = await SanPhamSV.layDanhSachSanPham();
    this.renderTableSanPham(sanPhamDanhSachAPI);
  }

  async themSanPham() {
    const tenSP = document.getElementById('TenSP').value;
    const giaSP = document.getElementById('GiaSP').value;
    const hinhSP = document.getElementById('HinhSP').value;
    const moTaSP = document.getElementById('moTaSP').value;
    const sanPham = new SanPhamModel(tenSP, moTaSP, hinhSP, giaSP);
    await SanPhamSV.themSanPham(sanPham);
    this.hienThiSanPham();
  }

  async suaSanPham(id) {
    const sanPham = await SanPhamSV.layChiTietSanPham(id);
    const { name, price, description, image } = sanPham.data;
    document.getElementById('TenSP').value = name;
    document.getElementById('GiaSP').value = price;
    document.getElementById('HinhSP').value = image;
    document.getElementById('moTaSP').value = description;
    this.#idEditSanPham = id;
  }

  async capNhatSanPham() {
    const tenSP = document.getElementById('TenSP').value;
    const giaSP = document.getElementById('GiaSP').value;
    const hinhSP = document.getElementById('HinhSP').value;
    const moTaSP = document.getElementById('moTaSP').value;
    const sanPham = new SanPhamModel(tenSP, moTaSP, hinhSP, giaSP);
    await SanPhamSV.capNhatSanPham(this.#idEditSanPham, sanPham);
    this.hienThiSanPham();
  }
}
