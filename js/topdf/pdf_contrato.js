function imprime_pdf() {
    var dd = {
        pageSize: 'FOLIO',
        pageOrientation: 'Portrait',
        // pageMargins: [0, 0, 0, 0],
        //footer: function(currentPage, pageCount) { return currentPage.toString() + ' de ' + pageCount; },
        // header: function(currentPage, pageCount, pageSize) {


        //   return [
        // 	{ text: '', alignment: (currentPage % 2) ? 'left' : 'right' },
        // 	{ canvas: [ { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 } ] }
        //   ]
        // },
        header: [

        ],

        content: [


            {
                style: 'tableHeader',
                table: {
                    widths: ['*'],
                    //margin: [40, 0, 40, 0], // Márgenes en puntos: arriba, izquierda, abajo, derecha
                    body: [
                        [
                            [
                                { text: encabezado[0].Tiutlo, style: 'header', alignment: 'center' }

                            ]
                        ],
                    ]
                },
                layout: 'noBorders'
            },
            { text: 'CARÁTULA DE CONTRATO DE PRÉSTAMO ', style: 'subheader' },
            //datos de caratula
            {

                table: {
                    widths: ['*', '*'],

                    body: [
                        //['Column 1', 'Column 2'],
                        [

                            [
                                { text: formatText(`**Nombre del Prestatario: **` + caratula[0].prestatario), style: 'normal2', },
                                { text: formatText(`**Monto del Crédito: **` + caratula[0].mto_cred), style: 'normal2', },
                                { text: formatText(`**Monto de Cuotas Cap: **` + caratula[0].mto_cuota_cap), style: 'normal2', },
                                { text: formatText(`**Gastos Administrativos: **` + caratula[0].gastos_Admin), style: 'normal2', },
                                { text: formatText(`**Destino del Crédito: **` + caratula[0].destino), style: 'normal2', },
                                { text: formatText(`**No. Préstamo: **` + caratula[0].no_prestamo), style: 'normal2', },
                            ],
                            [
                                { text: formatText(`**Periodicidad del Pago:  **` + caratula[0].periosidad), style: 'normal2', },
                                { text: formatText(`**Plazo: **` + caratula[0].plazo), style: 'normal2', },
                                { text: formatText(`**No. de Cuotas: **` + caratula[0].no_cuotas), style: 'normal2', },
                                { text: formatText(`**Tasa Interés: **` + caratula[0].tasa_interes), style: 'normal2', },
                                { text: formatText(`**Int. Moratorio Mensual: **` + caratula[0].mora_mensual), style: 'normal2', },
                                { text: formatText(`**Costo Anual Total (CAT): **` + caratula[0].CAT), style: 'normal2', },
                            ]
                            // 'Another one here'

                        ]
                    ]
                },
                //layout: 'noBorders'
            },

            { text: 'CONTRATO DE PRESTAMO No. ' + caratula[0].no_prestamo, alignment: 'center', margin: [0, 55, 0, 15], },
            {

                style: 'normal1',
                table: {
                    widths: ['*'],

                    body: [
                        [
                            cuerpo
                        ],
                    ]
                },
                layout: 'noBorders'
            },

            {
                margin: [0, 55, 0, 0],
                alignment: 'center',
                table: {

                    widths: ['*', '*'],

                    body: [
                        //['Column 1', 'Column 2'],
                        [
                            [
                                { text: '______________________________', bold:true, style: 'normal2', margin: [0, 55, 0, 0], },
                                { text: 'f) presidente y/o Gerente	', bold:true, style: 'normal2', },
                            ],
                            [
                                { text: '______________________________', bold:true, style: 'normal2',  margin: [0, 55, 0, 0],},
                                { text: ' f) Prestatario	', bold:true, style: 'normal2', },  
                                { text: 'Identidad: '+avales[0].identidad, bold:true, style: 'normal2', }, 
                            ],
                        ],
                        [
                            [
                                { text: '______________________________', bold:true, style: 'normal2',  margin: [0, 55, 0, 0],},
                                { text: 'f) Fiador Solidario	', bold:true, style: 'normal2', },
                                { text: 'Identidad: '+avales[0].identidad, bold:true, style: 'normal2', },
                            ],
                            [
                                { text: '______________________________', bold:true, style: 'normal2',  margin: [0, 55, 0, 0],},
                                { text: 'f) Fiador Solidario	', bold:true, style: 'normal2', },
                                { text: 'Identidad: '+avales[1].identidad , bold:true, style: 'normal2', },
                            ],
                        ]
                    ]
                },
                layout: 'noBorders'
            },
        ],
        //estilos aplicables a cada objeto
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                //margin: [0, 0, 0, 10],

            },
            header_dereccion: {
                fontSize: 9,
                bold: true,
                //margin: [0, 0, 0, 10],

            },
            subheader2: {

                fontSize: 12,
                //[left, top, right, bottom] 
                margin: [0, 0, 0, 55],
            },
            subheader: {
                fontSize: 12,
                // bold: true,
                margin: [0, 20, 0, 15]
            },
            tableExample: {
                //margin: [0, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 12,
                color: 'black'
            },
            normal1: {
                fontSize: 11
            },
            normal2: {
                //[left, top, right, bottom] 
                margin: [0, 5, 0, 5], // Márgenes en puntos: arriba, izquierda, abajo, derecha
                fontSize: 11,
            }

        },
        defaultStyle: {
            alignment: 'justify'
        }

    };

    pdfMake.createPdf(dd).open();
}