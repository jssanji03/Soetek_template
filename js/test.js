function init() {
        const newArea = document.querySelector('.newState');
        const committedArea = document.querySelector('.committedState');
        let str = ''
        data.forEach(function (item) {
            if (item.state == "New") {
                console.log(item);
                str += `
                <div class="stateCard card-light card-outline" id="${item.id}">
                    <div class="card-header">
                        <h6>${item.id}</h6>
                    </div>
                    <div class="card-body p-2">
                        <div class="row align-items-center">
                            <div class="col-3">
                                <div class="pic">
                                    <img class="img-fluid" src="https://fakeimg.pl/50x50/faa/000">
                                </div>
                            </div>
                            <div class="col-9">
                                <h6 class="primary">${item.name}</h6>
                            </div>
                        </div>
                        <div class="row">
                            <p class="comments">
                                ${item.comments}
                            </p>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-3">
                                <p class="state">State</p>
                            </div>
                            <div class="col-8">
                                <select class="stateSelect form-control-sm" style="width: 100%;">
                                    <optgroup>
                                        <option value="New">New</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Committed">Committed</option>
                                        <option value="Done">Done</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                select2ByValue(item.state)
                newArea.innerHTML = str
            }
            else if (item.state == "Committed") {
                str += `
                <div class="stateCard card-light card-outline" id="${item.id}">
                    <div class="card-header">
                        <h6>${item.id}</h6>
                    </div>
                    <div class="card-body p-2">
                        <div class="row align-items-center">
                            <div class="col-3">
                                <div class="pic">
                                    <img class="img-fluid" src="https://fakeimg.pl/50x50/faa/000">
                                </div>
                            </div>
                            <div class="col-9">
                                <h6 class="primary">${item.name}</h6>
                            </div>
                        </div>
                        <div class="row">
                            <p class="comments">
                                ${item.comments}
                            </p>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-3">
                                <p class="state">State</p>
                            </div>
                            <div class="col-8">
                                <select class="stateSelect form-control-sm" style="width: 100%;">
                                    <optgroup>
                                        <option value="New">New</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Committed">Committed</option>
                                        <option value="Done">Done</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                $(".stateSelect").select2().val("Committed").trigger("change");
                committedArea.innerHTML = str
            }
	    });
        
	
    }
    init()


    function init() {
        data.forEach(function (obj) {
            const newArea = document.querySelector('.newState');
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
                                        <option value="New">New</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Committed">Committed</option>
                                        <option value="Done">Done</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            newArea.innerHTML += htmlTemplate
            // select2ByValue (obj.state)
        });
    }
    init()