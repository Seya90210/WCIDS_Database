var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
            highlightLayer.openPopup();
        }
        var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1
        }).fitBounds([[-6.979397333043595,30.931885059466705],[5.761983926350146,47.52277885927143]]);
        var hash = new L.Hash(map);
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        map.createPane('pane_GoogleSatellite_0');
        map.getPane('pane_GoogleSatellite_0').style.zIndex = 400;
        var layer_GoogleSatellite_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            pane: 'pane_GoogleSatellite_0',
            opacity: 1.0,
            attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 20
        });
        layer_GoogleSatellite_0;
        map.createPane('pane_OSMStandard_1');
        map.getPane('pane_OSMStandard_1').style.zIndex = 401;
        var layer_OSMStandard_1 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            pane: 'pane_OSMStandard_1',
            opacity: 1.0,
            attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_OSMStandard_1;
        map.addLayer(layer_OSMStandard_1);
        function pop_Counties_2(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_Counties_2_0() {
            return {
                pane: 'pane_Counties_2',
                opacity: 1,
                color: 'rgba(236,44,44,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: false,
            }
        }
        map.createPane('pane_Counties_2');
        map.getPane('pane_Counties_2').style.zIndex = 402;
        map.getPane('pane_Counties_2').style['mix-blend-mode'] = 'normal';
        var layer_Counties_2 = new L.geoJson(json_Counties_2, {
            attribution: '',
            interactive: false,
            dataVar: 'json_Counties_2',
            layerName: 'layer_Counties_2',
            pane: 'pane_Counties_2',
            onEachFeature: pop_Counties_2,
            style: style_Counties_2_0,
        });
        bounds_group.addLayer(layer_Counties_2);
        map.addLayer(layer_Counties_2);
        function pop_WRABasins_3(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Basin Area</th>\
                        <td>' + (feature.properties['basin'] !== null ? autolinker.link(feature.properties['basin'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Regional Office</th>\
                        <td>' + (feature.properties['RO'] !== null ? autolinker.link(feature.properties['RO'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_WRABasins_3_0() {
            return {
                pane: 'pane_WRABasins_3',
                opacity: 1,
                color: 'rgba(101,113,209,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 2.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_WRABasins_3');
        map.getPane('pane_WRABasins_3').style.zIndex = 403;
        map.getPane('pane_WRABasins_3').style['mix-blend-mode'] = 'normal';
        var layer_WRABasins_3 = new L.geoJson(json_WRABasins_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_WRABasins_3',
            layerName: 'layer_WRABasins_3',
            pane: 'pane_WRABasins_3',
            onEachFeature: pop_WRABasins_3,
            style: style_WRABasins_3_0,
        });
        bounds_group.addLayer(layer_WRABasins_3);
        function pop_SubCounties_4(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Subcounty</th>\
                        <td>' + (feature.properties['adm2name'] !== null ? autolinker.link(feature.properties['adm2name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_SubCounties_4_0() {
            return {
                pane: 'pane_SubCounties_4',
                opacity: 1,
                color: 'rgba(71,27,27,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_SubCounties_4');
        map.getPane('pane_SubCounties_4').style.zIndex = 404;
        map.getPane('pane_SubCounties_4').style['mix-blend-mode'] = 'normal';
        var layer_SubCounties_4 = new L.geoJson(json_SubCounties_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_SubCounties_4',
            layerName: 'layer_SubCounties_4',
            pane: 'pane_SubCounties_4',
            onEachFeature: pop_SubCounties_4,
            style: style_SubCounties_4_0,
        });
        bounds_group.addLayer(layer_SubCounties_4);
        function pop_WRASubregions_5(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">SRO</th>\
                        <td>' + (feature.properties['sro'] !== null ? autolinker.link(feature.properties['sro'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Name</th>\
                        <td>' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_WRASubregions_5_0() {
            return {
                pane: 'pane_WRASubregions_5',
                opacity: 1,
                color: 'rgba(236,192,90,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_WRASubregions_5');
        map.getPane('pane_WRASubregions_5').style.zIndex = 405;
        map.getPane('pane_WRASubregions_5').style['mix-blend-mode'] = 'normal';
        var layer_WRASubregions_5 = new L.geoJson(json_WRASubregions_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_WRASubregions_5',
            layerName: 'layer_WRASubregions_5',
            pane: 'pane_WRASubregions_5',
            onEachFeature: pop_WRASubregions_5,
            style: style_WRASubregions_5_0,
        });
        bounds_group.addLayer(layer_WRASubregions_5);
        function pop_DamsLegalstatus_6(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Name</th>\
                        <td>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Code</th>\
                        <td>' + (feature.properties['Code'] !== null ? autolinker.link(feature.properties['Code'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Class</th>\
                        <td>' + (feature.properties['Class'] !== null ? autolinker.link(feature.properties['Class'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Basin Area</th>\
                        <td>' + (feature.properties['Basin Area'] !== null ? autolinker.link(feature.properties['Basin Area'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Sub-region</th>\
                        <td>' + (feature.properties['Subregion'] !== null ? autolinker.link(feature.properties['Subregion'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Dam Status</th>\
                        <td>' + (feature.properties['Dam Status'] !== null ? autolinker.link(feature.properties['Dam Status'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Permit Status</th>\
                        <td>' + (feature.properties['Permit Status'] !== null ? autolinker.link(feature.properties['Permit Status'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_DamsLegalstatus_6_0(feature) {
            switch(String(feature.properties['Permit Status'])) {
                case 'Legal':
                    return {
                pane: 'pane_DamsLegalstatus_6',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(27,245,52,1.0)',
                interactive: true,
            }
                    break;
                case 'Illegal':
                    return {
                pane: 'pane_DamsLegalstatus_6',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(243,39,3,1.0)',
                interactive: true,
            }
                    break;
                case 'Expired':
                    return {
                pane: 'pane_DamsLegalstatus_6',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(254,239,32,1.0)',
                interactive: true,
            }
                    break;
                case 'Application':
                    return {
                pane: 'pane_DamsLegalstatus_6',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(30,207,251,1.0)',
                interactive: true,
            }
                    break;
                case 'Unknown':
                    return {
                pane: 'pane_DamsLegalstatus_6',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(216,56,192,1.0)',
                interactive: true,
            }
                    break;
            }
        }
        map.createPane('pane_DamsLegalstatus_6');
        map.getPane('pane_DamsLegalstatus_6').style.zIndex = 406;
        map.getPane('pane_DamsLegalstatus_6').style['mix-blend-mode'] = 'normal';
        var layer_DamsLegalstatus_6 = new L.geoJson(json_DamsLegalstatus_6, {
            attribution: '',
            interactive: true,
            dataVar: 'json_DamsLegalstatus_6',
            layerName: 'layer_DamsLegalstatus_6',
            pane: 'pane_DamsLegalstatus_6',
            onEachFeature: pop_DamsLegalstatus_6,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.circleMarker(latlng, style_DamsLegalstatus_6_0(feature));
            },
        });
        bounds_group.addLayer(layer_DamsLegalstatus_6);
        map.addLayer(layer_DamsLegalstatus_6);
            var title = new L.Control();
            title.onAdd = function (map) {
                this._div = L.DomUtil.create('div', 'info');
                this.update();
                return this._div;
            };
            title.update = function () {
                this._div.innerHTML = '<h2>Water Conservation Infrastructure & Dam Safety Database</h2>';
            };
            title.addTo(map);
        var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topleft',
            text: 'Search',
            title: 'Testing'
        }).addTo(map);
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .className += ' fa fa-search';
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .title += 'Search for a place';
        var baseMaps = {};
        L.control.layers(baseMaps,{'Dams (Legal status)<br /><table><tr><td style="text-align: center;"><img src="legend/DamsLegalstatus_6_Legal0.png" /></td><td>Legal</td></tr><tr><td style="text-align: center;"><img src="legend/DamsLegalstatus_6_Illegal1.png" /></td><td>Illegal</td></tr><tr><td style="text-align: center;"><img src="legend/DamsLegalstatus_6_Expired2.png" /></td><td>Expired</td></tr><tr><td style="text-align: center;"><img src="legend/DamsLegalstatus_6_Application3.png" /></td><td>Application</td></tr><tr><td style="text-align: center;"><img src="legend/DamsLegalstatus_6_Unknown4.png" /></td><td>Unknown</td></tr></table>': layer_DamsLegalstatus_6,'<img src="legend/WRASubregions_5.png" /> WRA Subregions': layer_WRASubregions_5,'<img src="legend/SubCounties_4.png" /> Sub-Counties': layer_SubCounties_4,'<img src="legend/WRABasins_3.png" /> WRA Basins': layer_WRABasins_3,'<img src="legend/Counties_2.png" /> Counties': layer_Counties_2,"OSM Standard": layer_OSMStandard_1,"Google Satellite": layer_GoogleSatellite_0,},{collapsed:false}).addTo(map);
        setBounds();
        map.addControl(new L.Control.Search({
            layer: layer_DamsLegalstatus_6,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'Name'}));
        document.getElementsByClassName('search-button')[0].className +=
         ' fa fa-binoculars';
        resetLabels([layer_Counties_2,layer_SubCounties_4,layer_WRASubregions_5]);
        map.on("zoomend", function(){
            resetLabels([layer_Counties_2,layer_SubCounties_4,layer_WRASubregions_5]);
        });
        map.on("layeradd", function(){
            resetLabels([layer_Counties_2,layer_SubCounties_4,layer_WRASubregions_5]);
        });
        map.on("layerremove", function(){
            resetLabels([layer_Counties_2,layer_SubCounties_4,layer_WRASubregions_5]);
        });