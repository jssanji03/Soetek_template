
        var data = {
            "data": [{
                "id": 1,
                "Dept":"總經理",
                "name": "Tony",
                "pid": 0,
                "childrens": [{
                    "id": 2,
                    "Dept":"Business Dept.",
                    "name": "Charlie",
                    "pid": 1,
                    "childrens": [
                        {
                            "id": 5,
                            "Dept":".Net",
                            "name": "Kerry",
                            "pid": 2,
                            "childrens": [{
                                        "id": 10,
                                        "name": "person1",
                                        "pid": 5,
                                        "childrens": []
                                    },
                                    {
                                        "id": 11,
                                        "name": "person2",
                                        "pid": 5,
                                        "childrens": []
                                    },
                                    {
                                        "id": 12,
                                        "name": "person3",
                                        "pid": 5,
                                        "childrens": []
                                    }
                                ]
                            },
                            {
                                "id": 6,
                                "Dept":"Dept.",
                                "name": "OOO",
                                "pid": 2,
                                "childrens": [{
                                    "id": 13,
                                    "name": "person4",
                                    "pid": 6,
                                    "childrens": []
                                }]
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "Dept":"SAP Dept.",
                        "name": "SAP",
                        "pid": 1,
                        "childrens": [
                            {
                                "id": 7,
                                "Dept":"Dept.",
                                "name": "OOO",
                                "pid": 2,
                                "childrens": [{
                                    "id": 14,
                                    "name": "person5",
                                    "pid": 7,
                                    "childrens": []
                                }]
                            },
                            {
                                "id": 8,
                                "Dept":"Dept.",
                                "name": "OOO",
                                "pid": 2,
                                "childrens": [{
                                    "id": 15,
                                    "name": "person6",
                                    "pid": 8,
                                    "childrens": []
                                }]
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "Dept":"業務部",
                        "name": "Collin",
                        "pid": 1,
                        "childrens": [{
                            "id": 9,
                            "Dept":"業務部",
                            "name": "OOO",
                            "pid": 2,
                            "childrens": [{
                                "id": 16,
                                "name": "person7",
                                "pid": 9,
                                "childrens": []
                            }]
                        }]
                    }
                ]
            }]
        }

        function showall(menu_list, parent) {
            $.each(menu_list, function (index, val) {
                console.log(val);
                if (val.childrens.length > 0) {
                    var li = $("<li></li>").addClass("level"+val.pid);
                    li.append(`<a class="organization_text" href='javascript:void(0)' onclick=getOrgId(${val.id});><span class="dept">${val.Dept}</span> <br> ${val.name}</a>`).append("<ul></ul>").appendTo(parent);
                    //递归显示
                    showall(val.childrens, $(li).children().eq(1));
                } else {
                    $("<li></li>").append("<a class='organization_text' href='javascript:void(0)' onclick=getOrgId(" + val.id + ");>" +
                        val.name + "</a>").appendTo(parent);
                }
            });

        }
        var showlist = $("<ul id='org' style='display:none'></ul>");
        showall(data.data, showlist);
        $("#jOrgChart").append(showlist);
        $("#org").jOrgChart({
            chartElement: '#jOrgChart', //指定在某个dom生成jorgchart
            dragAndDrop: false //设置是否可拖动
        });

        function getOrgId(val) {
            console.log(val);
        }
