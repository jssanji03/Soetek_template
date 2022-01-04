$(function () {
    
    
    // const data = {
    //     // selectOption: [
    //     // { id: 1, text: "New" },
    //     // { id: 2, text: "In Progress" },
    //     // { id: 3, text: "Committed" },
    //     // { id: 4, text: "Done" },
    //     // ],
    //     state: [
    //     {
    //         id: "1",
    //         name: "Jack-item1",
    //         state: "New",
    //         title: "16543",
    //         comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    //     },
    //     {
    //         id: "2",
    //         name: "Mary-item2",
    //         state: "Committed",
    //         title: "16543",
    //         comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    //     },
    //     {
    //         id: "3",
    //         name : "Ben-item3",
    //         state : "Done",
    //         title: "16543",
    //         comments : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    //     }
    //     ]
    // }
    let data = 
        [
        {
            id: "1",
            name: "Jack-item1",
            state: "New",
            title: "16543",
            comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id: "2",
            name: "Mark-item2",
            state: "New",
            title: "16543",
            comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id: "3",
            name: "Mary-item3",
            state: "Committed",
            title: "16543",
            comments: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id: "4",
            name : "Ben-item4",
            state : "Done",
            title: "16543",
            comments : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id: "5",
            name : "Jean-item5",
            state : "InProgress",
            title: "16543",
            comments : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
        ]
    
    let newData = []
    let committedData = []
    const newArea = document.querySelector('.newState');
    const committedArea = document.querySelector('.committedState');
    const doneArea = document.querySelector('.doneState');
    
    //樣板
    function template(data) {
        return`
                <div class="stateCard card-light card-outline" id="${data.id}">
                    <div class="card-header">
                        <h6>${data.id}</h6>
                    </div>
                    <div class="card-body p-2">
                        <div class="row align-items-center">
                            <div class="col-3">
                                <div class="pic">
                                    <img class="img-fluid" src="https://fakeimg.pl/50x50/faa/000">
                                </div>
                            </div>
                            <div class="col-9">
                                <h6 class="primary">${data.name}</h6>
                            </div>
                        </div>
                        <div class="row">
                            <p class="comments">
                                ${data.comments}
                            </p>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-3">
                                <p class="state">State</p>
                            </div>
                            <div class="col-8">
                                <select class="stateSelect form-control-sm" data-id="${data.id}" style="width: 100%;">
                                    <optgroup>
                                        <option value="New">New</option>
                                        <option value="InProgress">In Progress</option>
                                        <option value="Committed">Committed</option>
                                        <option value="Done">Done</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                `;
    }
    //畫面初始化
    function init() {
        data.forEach(function (obj) {
            if (obj.state == "New" ) {
                // newData.push(obj)
                str = ''
                str += template(obj)
                newArea.innerHTML += str
                select2ByValue (obj.state)
            }
            else if (obj.state == "Committed") {
                // committedData.push(obj)
                str = ''
                str += template(obj)
                committedArea.innerHTML += str
                select2ByValue (obj.state)
            }
            else if (obj.state == "Done") {
                // committedData.push(obj)
                str = ''
                str += template(obj)
                doneArea.innerHTML += str
                select2ByValue (obj.state)
            }
        });
    }
    init()

    function filterRender() {
        data.forEach(function (obj) {
            if (obj.state == "New" ) {
                // newData.push(obj)
                str = ''
                str += template(obj)
                newArea.innerHTML += str
                select2ByValue (obj.state)
            }
            else if (obj.state == "Committed") {
                // committedData.push(obj)
                str = ''
                str += template(obj)
                committedArea.innerHTML += str
                select2ByValue (obj.state)
            }
        });
        // newData.forEach((obj) => {
        //     str = ''
        //     str += template(obj)
        //     newArea.innerHTML += str
        //     select2ByValue (obj.state)
        // })
        // committedData.forEach((obj) => {
        //     str = ''
        //     str += template(obj)
        //     committedArea.innerHTML += str
        //     select2ByValue (obj.state)
        // })
    }
    

    // $(".stateSelect").select2({
    //     minimumResultsForSearch: Infinity,
    //     // data: data.selectOption,
    // });
    
    // Select the option with a value of '1'
    $(".sortable1").sortable({
        connectWith: ".connectedSortable",
        placeholder: "ui-state-highlight",
        start: function() {
        },
        update : function(event, ui){       //更新排序之後
            const $toArray = $(this).sortable("toArray");
            console.log($toArray);
        }

    }).disableSelection();

    // 通過value 設置select2的默認值
    function select2ByValue (value) {
        if (value == "New") {
            $(".newState .stateSelect").val("New").trigger("change");
        }
        else if (value == "Committed") {
            $(".committedState .stateSelect").val("Committed").trigger("change");
        }
        else if (value == "In Progress") {
            $(".InProgress .stateSelect").val("InProgress").trigger("change");
        }
        else if (value == "Done") {
            $(".doneState .stateSelect").val("Done").trigger("change");
        }
    }

    const initRenderState = document.querySelectorAll('.stateSelect')
    const regionSearch = document.querySelector('.stateSelect')
    
    // $('.stateSelect').on("change",function () {
    //     let selectedValue = $(this).val();
    //     const currentData = $(this).attr("data-id")
    //     data = data.filter(function (item) {
    //         if (selectedValue == "New") {
    //             data[currentData - 1].state = "New"
    //             return item;
    //         }
    //         else if (selectedValue == "Committed") {
    //             data[currentData - 1].state = "Committed"
    //             return item;
    //         }
    //         else if (selectedValue == "InProgress") {
    //             data[currentData - 1].state = "InProgress"
    //             return item;
    //         }
    //     });
    //     init()
    //     // data.forEach(function (item, index, arr) {
    //     //     if (item.state == "New") {
    //     //         newData.push(item)
    //     //         newData = [...new Set(newData)]
    //     //         // newData.splice(index, 1);
    //     //     }
    //     //     else if (item.state == "Committed") {
    //     //         // committedData.splice(index, 1);
    //     //         committedData.push(item)
    //     //         committedData = [...new Set(committedData)]
    //     //     }
    //     // });
    //     // data.forEach(function (item, index, arr) {
    //     //     if (item.state != "New") {
    //     //         newData.splice(index, 1);
    //     //     }
    //     //     else if (item.state != "Committed") {
    //     //         committedData.splice(index, 1);
    //     //     }
    //     // });
    //     console.log("data",data);
    // })

    initRenderState.forEach((selectBox) => {
           const index = selectBox.selectedIndex;
        selectBox.addEventListener("change", function (e) {
            let selectedValue = e.target.value;
            const currentData = $(this).attr("data-id")
            const index = selectBox.selectedIndex;
            // console.log(selectBox.options[index].value);
            data = data.filter(function (item) {
                if (selectedValue == "New") {
                    data[currentData - 1].state = "New"
                    return item;
                }
                else if (selectedValue == "Committed") {
                    data[currentData - 1].state = "Committed"
                    return item;
                }
                else if (selectedValue == "InProgress") {
                    data[currentData - 1].state = "InProgress"
                    return item;
                }
            });
            let str = ""
            data.forEach(function (item) {
                if (item.state == selectedValue) {
                    str += template(item)
                }
            })
            committedArea.innerHTML = str
        });
    })
    // function filter() {
    //     // filterRender(regionSearch.value);
    //     console.log(regionSearch);
    // }

    // function filterRender() {
    //     let str = "";
    //     const newArea = document.querySelector('.newState');
    //     const committedArea = document.querySelector('.committedState');
    //     let newData = []
    //     let committedData = []
	//     const changeState = data.filter(function (item) {
    //         if (item.state == "New") {
    //             newData.push(item)
	//     		return item;
    //         } else if (item.state == "Committed") {
    //             committedData.push(item)
	//     		return item;
	//     	} 
    //     });
    //     changeState.forEach(function (item) {
    //         if (item.state == "New") {
    //             console.log(item.state == "New");
    //             str += template(item)
    //             select2ByValue (item.state)
    //         } else if (item.state == "Committed") {
    //             str += template(item)
    //             // committedArea.innerHTML += str
    //             select2ByValue (item.state)
	//     	} 
    //     })
    //     committedArea.innerHTML += str
    //     console.log(changeState);
    // }
    // filterRender();

   
    
    
    
    
});