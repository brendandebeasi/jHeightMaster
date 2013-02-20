/*
jHeightMaster
masterElement - the object that slaveElement will need to be smaller than or equal to in height
slaveElement - the object that will shrink to be smaller than or equal to in height
 */
 jHeightMaster = function(masterElement,slaveElement,hiddenClass) {
    var masterHeight         = masterElement.outerHeight();
    var slaveHeight          = slaveElement.outerHeight();
    slaveElement.children().removeClass(hiddenClass);
    while(slaveHeight > masterHeight && slaveElement.children().not('.'+hiddenClass).not('.alwaysShow').length > 0) {
        slaveElement.children().not('.'+hiddenClass).not('.alwaysShow').last().addClass(hiddenClass);
        slaveHeight = slaveElement.outerHeight();
    }

}