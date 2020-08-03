// module.exports = {
//   someSidebar: {
//     'Pengenalan Bahasa C': ['doc1'],
//     'Dasar': [],
//     'Flow Control': [],
//     'Array dan String': [],
//     'Fungsi dan Rekursi': [],
//     'Pointer': [],
//     'Struct': []
//   }
// };
function buildCategory(label, items) {
  return {
    type: 'category',
    label: label,
    items: items
  };
}

module.exports = {
  // dasprog: top-level (instances of sidebar)
  // example variety forms
  dasprog: [
    'memulai',
    buildCategory('Pengenalan Bahasa C', [
      'intro/contoh_program',
      'intro/struktur_program',
    ]),
    buildCategory('Dasar Bahasa C', [
      'basic/statement',
      'basic/komentar',
      'basic/keyword_identifier',
      'basic/variabel',
      'basic/konstanta_literal',
      'basic/tipe_data_dasar',
      'basic/operator',
    ]),
    buildCategory('Flow Control', [
      'flow_control/percabangan',
      'flow_control/perulangan',
    ]),
    buildCategory('Array dan String', [
      'array_string/array',
      'array_string/string',
    ]),
    buildCategory('Fungsi', [
      'fungsi/pengenalan_fungsi',
      'fungsi/variable_scope',
      'fungsi/fungsi_rekursif',
    ]),
  ],
};