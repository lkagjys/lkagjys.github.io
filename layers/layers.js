var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_2017_0 = new ol.format.GeoJSON();
var features_2017_0 = format_2017_0.readFeatures(json_2017_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2017_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2017_0.addFeatures(features_2017_0);var lyr_2017_0 = new ol.layer.Vector({
                source:jsonSource_2017_0, 
                style: style_2017_0,
                title: '<img src="styles/legend/2017_0.png" /> 2017 검경양성'
            });var format_2016_1 = new ol.format.GeoJSON();
var features_2016_1 = format_2016_1.readFeatures(json_2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2016_1.addFeatures(features_2016_1);var lyr_2016_1 = new ol.layer.Vector({
                source:jsonSource_2016_1, 
                style: style_2016_1,
                title: '<img src="styles/legend/2016_1.png" /> 2016 검경양성'
            });var format_2015_2 = new ol.format.GeoJSON();
var features_2015_2 = format_2015_2.readFeatures(json_2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2015_2.addFeatures(features_2015_2);var lyr_2015_2 = new ol.layer.Vector({
                source:jsonSource_2015_2, 
                style: style_2015_2,
                title: '<img src="styles/legend/2015_2.png" /> 2015 검경양성'
            });var format_2014_3 = new ol.format.GeoJSON();
var features_2014_3 = format_2014_3.readFeatures(json_2014_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2014_3.addFeatures(features_2014_3);var lyr_2014_3 = new ol.layer.Vector({
                source:jsonSource_2014_3, 
                style: style_2014_3,
                title: '<img src="styles/legend/2014_3.png" /> 2014 검경양성'
            });var format_2013_4 = new ol.format.GeoJSON();
var features_2013_4 = format_2013_4.readFeatures(json_2013_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2013_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2013_4.addFeatures(features_2013_4);var lyr_2013_4 = new ol.layer.Vector({
                source:jsonSource_2013_4, 
                style: style_2013_4,
                title: '<img src="styles/legend/2013_4.png" /> 2013 검경양성'
            });var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__5.addFeatures(features__5);var lyr__5 = new ol.layer.Vector({
                source:jsonSource__5, 
                style: style__5,
                title: '<img src="styles/legend/_5.png" /> 시군'
            });var format_0907_6 = new ol.format.GeoJSON();
var features_0907_6 = format_0907_6.readFeatures(json_0907_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0907_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_0907_6.addFeatures(features_0907_6);var lyr_0907_6 = new ol.layer.Vector({
                source:jsonSource_0907_6, 
                style: style_0907_6,
                title: '<img src="styles/legend/0907_6.png" /> 반출금지구역(0907)'
            });var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__7.addFeatures(features__7);var lyr__7 = new ol.layer.Vector({
                source:jsonSource__7, 
                style: style__7,
                title: '<img src="styles/legend/_7.png" /> 송이생산구역'
            });var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__8.addFeatures(features__8);var lyr__8 = new ol.layer.Vector({
                source:jsonSource__8, 
                style: style__8,
                title: '<img src="styles/legend/_8.png" /> 보안림'
            });var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__9.addFeatures(features__9);var lyr__9 = new ol.layer.Vector({
                source:jsonSource__9, 
                style: style__9,
                title: '<img src="styles/legend/_9.png" /> 자연공원구역'
            });var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__10.addFeatures(features__10);var lyr__10 = new ol.layer.Vector({
                source:jsonSource__10, 
                style: style__10,
                title: '<img src="styles/legend/_10.png" /> 자연휴양림'
            });var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__11.addFeatures(features__11);var lyr__11 = new ol.layer.Vector({
                source:jsonSource__11, 
                style: style__11,
                title: '<img src="styles/legend/_11.png" /> 역사문화적보존구역'
            });var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__12.addFeatures(features__12);var lyr__12 = new ol.layer.Vector({
                source:jsonSource__12, 
                style: style__12,
                title: '<img src="styles/legend/_12.png" /> 문화재보호구역'
            });var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__13.addFeatures(features__13);var lyr__13 = new ol.layer.Vector({
                source:jsonSource__13, 
                style: style__13,
                title: '<img src="styles/legend/_13.png" /> 백두대간보호구역'
            });var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__14.addFeatures(features__14);var lyr__14 = new ol.layer.Vector({
                source:jsonSource__14, 
                style: style__14,
                title: '<img src="styles/legend/_14.png" /> 소나무림 연구자료'
            });var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__15.addFeatures(features__15);var lyr__15 = new ol.layer.Vector({
                source:jsonSource__15, 
                style: style__15,
                title: '<img src="styles/legend/_15.png" /> 산림유전자원보호구역'
            });var format__16 = new ol.format.GeoJSON();
var features__16 = format__16.readFeatures(json__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__16.addFeatures(features__16);var lyr__16 = new ol.layer.Vector({
                source:jsonSource__16, 
                style: style__16,
                title: '<img src="styles/legend/_16.png" /> 채종림'
            });var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__17.addFeatures(features__17);var lyr__17 = new ol.layer.Vector({
                source:jsonSource__17, 
                style: style__17,
                title: '<img src="styles/legend/_17.png" /> 지정보호수'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr_2017_0,lyr_2016_1,lyr_2015_2,lyr_2014_3,lyr_2013_4,],
                                title: "검경양성좌표"});

lyr_2017_0.setVisible(false);lyr_2016_1.setVisible(false);lyr_2015_2.setVisible(false);lyr_2014_3.setVisible(false);lyr_2013_4.setVisible(false);lyr__5.setVisible(true);lyr_0907_6.setVisible(false);lyr__7.setVisible(false);lyr__8.setVisible(false);lyr__9.setVisible(false);lyr__10.setVisible(false);lyr__11.setVisible(false);lyr__12.setVisible(false);lyr__13.setVisible(false);lyr__14.setVisible(false);lyr__15.setVisible(false);lyr__16.setVisible(false);lyr__17.setVisible(false);
var layersList = [baseLayer,group_,lyr__5,lyr_0907_6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13,lyr__14,lyr__15,lyr__16,lyr__17];
lyr_2017_0.set('fieldAliases', {'id': 'id', });
lyr_2016_1.set('fieldAliases', {'id': 'id', });
lyr_2015_2.set('fieldAliases', {'id': 'id', });
lyr_2014_3.set('fieldAliases', {'id': 'id', });
lyr_2013_4.set('fieldAliases', {'id': 'id', });
lyr__5.set('fieldAliases', {'ADM_SECT_C': 'ADM_SECT_C', 'SGG_NM': 'SGG_NM', 'SGG_OID': 'SGG_OID', 'COL_ADM_SE': 'COL_ADM_SE', });
lyr_0907_6.set('fieldAliases', {'RI_CD': 'RI_CD', 'RI_NM': 'RI_NM', 'STD_SGGCD': 'STD_SGGCD', 'OBJECTID': 'OBJECTID', '源??': '源??', '獄???': '獄???', 'EMD_CD': 'EMD_CD', 'EMD_NM': 'EMD_NM', 'HJD_NM': 'HJD_NM', '筌????': '筌????', 'SGG_CD': 'SGG_CD', 'SGG_NM': 'SGG_NM', '???': '???', '???_1': '???_1', '??': '??', 'GRADE_2016': 'GRADE_2016', });
lyr__7.set('fieldAliases', {'RI_CD': 'RI_CD', 'RI_NM': 'RI_NM', 'SGG_OID': 'SGG_OID', 'COL_ADM_SE': 'COL_ADM_SE', 'Songi_sa': 'Songi_sa', });
lyr__8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UNAME': 'UNAME', 'ASSIGN_GB': 'ASSIGN_GB', 'DETAIL_GB': 'DETAIL_GB', 'MGR_NO': 'MGR_NO', 'MNUM': 'MNUM', 'STD_SGGCD': 'STD_SGGCD', 'MAP_ID': 'MAP_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', '구분a': '구분a', });
lyr__9.set('fieldAliases', {'OBJECTID': 'OBJECTID', '자연공원': '자연공원', '구분a': '구분a', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UNAME': 'UNAME', 'ASSIGN_GB': 'ASSIGN_GB', 'DETAIL_GB': 'DETAIL_GB', 'MGR_NO': 'MGR_NO', 'MNUM': 'MNUM', 'STD_SGGCD': 'STD_SGGCD', 'MAP_ID': 'MAP_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__11.set('fieldAliases', {'구분': '구분', '명칭': '명칭', '주소': '주소', '번호': '번호', '수정주소_': '수정주소_', '비고': '비고', '문화': '문화', });
lyr__12.set('fieldAliases', {'OBJECTID': 'OBJECTID', '문화재코드': '문화재코드', '종목코드': '종목코드', '문화재명': '문화재명', '지정번호': '지정번호', '면적': '면적', '시도코드': '시도코드', '시군구코드': '시군구코드', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', '구분a': '구분a', });
lyr__13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BKMNT_ZONE': 'BKMNT_ZONE', 'MAP_NAM': 'MAP_NAM', 'MAP_NUM': 'MAP_NUM', 'SD_NM': 'SD_NM', 'SD_CD': 'SD_CD', });
lyr__14.set('fieldAliases', {'번호': '번호', '문헌번호': '문헌번호', '명칭': '명칭', '문헌상주소': '문헌상주소', '변경주소': '변경주소', '유형1': '유형1', '유형2': '유형2', '지정번호': '지정번호', '지정일자': '지정일자', '보호구역': '보호구역', '지적면적ha': '지적면적ha', '지정면적ha': '지정면적ha', '비고': '비고', '특징': '특징', });
lyr__15.set('fieldAliases', {'OBJECTID': 'OBJECTID', '주소': '주소', '지정번호': '지정번호', '지정일': '지정일', '유형': '유형', '수종': '수종', '문헌번호': '문헌번호', '지정면적m2': '지정면적m2', '명칭': '명칭', '관리기관': '관리기관', '구분': '구분', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', '우선순위': '우선순위', });
lyr__16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AG_GID': 'AG_GID', 'UNAME': 'UNAME', 'ASSIGN_GB': 'ASSIGN_GB', 'DETAIL_GB': 'DETAIL_GB', 'MGR_NO': 'MGR_NO', 'MNUM': 'MNUM', 'STD_SGGCD': 'STD_SGGCD', 'MAP_ID': 'MAP_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__17.set('fieldAliases', {'관리기': '관리기', '지정번': '지정번', '보호수': '보호수', '나무종': '나무종', '지적': '지적', '소유자': '소유자', '위도': '위도', '경도': '경도', '구분': '구분', '주소': '주소', });
lyr_2017_0.set('fieldImages', {'id': 'TextEdit', });
lyr_2016_1.set('fieldImages', {'id': 'TextEdit', });
lyr_2015_2.set('fieldImages', {'id': 'TextEdit', });
lyr_2014_3.set('fieldImages', {'id': 'TextEdit', });
lyr_2013_4.set('fieldImages', {'id': 'TextEdit', });
lyr__5.set('fieldImages', {'ADM_SECT_C': 'TextEdit', 'SGG_NM': 'TextEdit', 'SGG_OID': 'TextEdit', 'COL_ADM_SE': 'TextEdit', });
lyr_0907_6.set('fieldImages', {'RI_CD': 'TextEdit', 'RI_NM': 'TextEdit', 'STD_SGGCD': 'TextEdit', 'OBJECTID': 'TextEdit', '源??': 'TextEdit', '獄???': 'TextEdit', 'EMD_CD': 'TextEdit', 'EMD_NM': 'TextEdit', 'HJD_NM': 'TextEdit', '筌????': 'TextEdit', 'SGG_CD': 'TextEdit', 'SGG_NM': 'TextEdit', '???': 'TextEdit', '???_1': 'TextEdit', '??': 'TextEdit', 'GRADE_2016': 'TextEdit', });
lyr__7.set('fieldImages', {'RI_CD': 'TextEdit', 'RI_NM': 'TextEdit', 'SGG_OID': 'TextEdit', 'COL_ADM_SE': 'TextEdit', 'Songi_sa': 'TextEdit', });
lyr__8.set('fieldImages', {'OBJECTID': 'TextEdit', 'UNAME': 'TextEdit', 'ASSIGN_GB': 'TextEdit', 'DETAIL_GB': 'TextEdit', 'MGR_NO': 'TextEdit', 'MNUM': 'TextEdit', 'STD_SGGCD': 'TextEdit', 'MAP_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', '구분a': 'TextEdit', });
lyr__9.set('fieldImages', {'OBJECTID': 'TextEdit', '자연공원': 'TextEdit', '구분a': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__10.set('fieldImages', {'OBJECTID': 'TextEdit', 'UNAME': 'TextEdit', 'ASSIGN_GB': 'TextEdit', 'DETAIL_GB': 'TextEdit', 'MGR_NO': 'TextEdit', 'MNUM': 'TextEdit', 'STD_SGGCD': 'TextEdit', 'MAP_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__11.set('fieldImages', {'구분': 'TextEdit', '명칭': 'TextEdit', '주소': 'TextEdit', '번호': 'TextEdit', '수정주소_': 'TextEdit', '비고': 'TextEdit', '문화': 'TextEdit', });
lyr__12.set('fieldImages', {'OBJECTID': 'TextEdit', '문화재코드': 'TextEdit', '종목코드': 'TextEdit', '문화재명': 'TextEdit', '지정번호': 'TextEdit', '면적': 'TextEdit', '시도코드': 'TextEdit', '시군구코드': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', '구분a': 'TextEdit', });
lyr__13.set('fieldImages', {'OBJECTID': 'TextEdit', 'BKMNT_ZONE': 'TextEdit', 'MAP_NAM': 'TextEdit', 'MAP_NUM': 'TextEdit', 'SD_NM': 'TextEdit', 'SD_CD': 'TextEdit', });
lyr__14.set('fieldImages', {'번호': 'TextEdit', '문헌번호': 'TextEdit', '명칭': 'TextEdit', '문헌상주소': 'TextEdit', '변경주소': 'TextEdit', '유형1': 'TextEdit', '유형2': 'TextEdit', '지정번호': 'TextEdit', '지정일자': 'TextEdit', '보호구역': 'TextEdit', '지적면적ha': 'TextEdit', '지정면적ha': 'TextEdit', '비고': 'TextEdit', '특징': 'TextEdit', });
lyr__15.set('fieldImages', {'OBJECTID': 'TextEdit', '주소': 'TextEdit', '지정번호': 'TextEdit', '지정일': 'TextEdit', '유형': 'TextEdit', '수종': 'TextEdit', '문헌번호': 'TextEdit', '지정면적m2': 'TextEdit', '명칭': 'TextEdit', '관리기관': 'TextEdit', '구분': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', '우선순위': 'TextEdit', });
lyr__16.set('fieldImages', {'OBJECTID': 'TextEdit', 'AG_GID': 'TextEdit', 'UNAME': 'TextEdit', 'ASSIGN_GB': 'TextEdit', 'DETAIL_GB': 'TextEdit', 'MGR_NO': 'TextEdit', 'MNUM': 'TextEdit', 'STD_SGGCD': 'TextEdit', 'MAP_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__17.set('fieldImages', {'관리기': 'TextEdit', '지정번': 'TextEdit', '보호수': 'TextEdit', '나무종': 'TextEdit', '지적': 'TextEdit', '소유자': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '구분': 'TextEdit', '주소': 'TextEdit', });
lyr_2017_0.set('fieldLabels', {});
lyr_2016_1.set('fieldLabels', {});
lyr_2015_2.set('fieldLabels', {});
lyr_2014_3.set('fieldLabels', {});
lyr_2013_4.set('fieldLabels', {});
lyr__5.set('fieldLabels', {'ADM_SECT_C': 'no label', 'SGG_NM': 'no label', 'SGG_OID': 'no label', 'COL_ADM_SE': 'no label', });
lyr_0907_6.set('fieldLabels', {'RI_CD': 'no label', 'RI_NM': 'no label', 'STD_SGGCD': 'no label', 'OBJECTID': 'no label', '源??': 'no label', '獄???': 'no label', 'EMD_CD': 'no label', 'EMD_NM': 'no label', 'HJD_NM': 'no label', '筌????': 'no label', 'SGG_CD': 'no label', 'SGG_NM': 'no label', '???': 'no label', '???_1': 'no label', '??': 'no label', 'GRADE_2016': 'no label', });
lyr__7.set('fieldLabels', {'RI_CD': 'no label', 'RI_NM': 'no label', 'SGG_OID': 'no label', 'COL_ADM_SE': 'no label', 'Songi_sa': 'no label', });
lyr__8.set('fieldLabels', {'OBJECTID': 'no label', 'UNAME': 'no label', 'ASSIGN_GB': 'no label', 'DETAIL_GB': 'no label', 'MGR_NO': 'no label', 'MNUM': 'no label', 'STD_SGGCD': 'no label', 'MAP_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', '구분a': 'no label', });
lyr__9.set('fieldLabels', {'OBJECTID': 'no label', '자연공원': 'no label', '구분a': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__10.set('fieldLabels', {'OBJECTID': 'no label', 'UNAME': 'no label', 'ASSIGN_GB': 'no label', 'DETAIL_GB': 'no label', 'MGR_NO': 'no label', 'MNUM': 'no label', 'STD_SGGCD': 'no label', 'MAP_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__11.set('fieldLabels', {'구분': 'no label', '명칭': 'no label', '주소': 'no label', '번호': 'no label', '수정주소_': 'no label', '비고': 'no label', '문화': 'no label', });
lyr__12.set('fieldLabels', {'OBJECTID': 'no label', '문화재코드': 'no label', '종목코드': 'no label', '문화재명': 'no label', '지정번호': 'no label', '면적': 'no label', '시도코드': 'no label', '시군구코드': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', '구분a': 'no label', });
lyr__13.set('fieldLabels', {'OBJECTID': 'no label', 'BKMNT_ZONE': 'no label', 'MAP_NAM': 'no label', 'MAP_NUM': 'no label', 'SD_NM': 'no label', 'SD_CD': 'no label', });
lyr__14.set('fieldLabels', {'번호': 'no label', '문헌번호': 'no label', '명칭': 'no label', '문헌상주소': 'no label', '변경주소': 'no label', '유형1': 'no label', '유형2': 'no label', '지정번호': 'no label', '지정일자': 'no label', '보호구역': 'no label', '지적면적ha': 'no label', '지정면적ha': 'no label', '비고': 'no label', '특징': 'no label', });
lyr__15.set('fieldLabels', {'OBJECTID': 'no label', '주소': 'no label', '지정번호': 'no label', '지정일': 'no label', '유형': 'no label', '수종': 'no label', '문헌번호': 'no label', '지정면적m2': 'no label', '명칭': 'no label', '관리기관': 'no label', '구분': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', '우선순위': 'no label', });
lyr__16.set('fieldLabels', {'OBJECTID': 'no label', 'AG_GID': 'no label', 'UNAME': 'no label', 'ASSIGN_GB': 'no label', 'DETAIL_GB': 'no label', 'MGR_NO': 'no label', 'MNUM': 'no label', 'STD_SGGCD': 'no label', 'MAP_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__17.set('fieldLabels', {'관리기': 'no label', '지정번': 'no label', '보호수': 'no label', '나무종': 'no label', '지적': 'no label', '소유자': 'no label', '위도': 'no label', '경도': 'no label', '구분': 'no label', '주소': 'no label', });
lyr__17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr__17.on("postcompose", update);

    var listenerKey = lyr__17.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });