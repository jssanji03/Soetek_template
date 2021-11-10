$(function () {
    const stateData =  [
        { id: 0, text: "New" },
        { id: 1, text: "Approved" },
        { id: 2, text: "Committed"},
        { id: 3, text: "Done" },
        { id: 4, text: "Reject" },
    ]
    
    const data = [
        {
            id : "item1",
            name : "Jack-item1",
            state : "New",
            title: "16543",
            comments : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id : "item2",
            name : "Mary-item2",
            state : "Approved",
            title: "16543",
            comments : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            id : "item3",
            name : "Ben-item3",
            state : "Reject",
            title: "16543",
            comments : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
    ]
    data.forEach(function (obj, key) {
        let htmlTemplate = ''
        htmlTemplate +=
            `
            <div class="stateCard card-light card-outline" id="${obj.id}">
                <div class="card-header">
                    <h6>${obj.id}</h6>
                </div>
                <div class="card-body p-2">
                    <div class="row align-items-center">
                        <div class="col-3">
                            <div class="pic">
                                <img class="img-fluid" src="https://fakeimg.pl/50x50/faa/000">
                            </div>
                        </div>
                        <div class="col-9">
                            <h6 class="primary">${obj.name}</h6>
                        </div>
                    </div>
                    <div class="row">
                        <p class="comments">
                            ${obj.comments}
                        </p>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-3">
                            <p class="state">State</p>
                        </div>
                        <div class="col-8">
                            <select class="stateSelect form-control-sm" style="width: 100%;">
                                <optgroup>
                                    
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            `;
        const menu = document.querySelector('#newState');
        menu.innerHTML += htmlTemplate
        
    });
    function selected() {
        for (let i in stateData) {
            for (let j in data) {
                if (data[j].state == stateData[i].text) {
                    data[j].num = stateData[i].id
                    console.log(data);
                    $('.stateSelect').val(`${data[j].num}`).trigger('change');
                }
            }
        }
    }
    selected()
    $(".stateSelect").select2({
        minimumResultsForSearch: Infinity,
        data: stateData,
    });
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
});