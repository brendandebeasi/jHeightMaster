jQuery.fn.reverse = [].reverse;//jQuery reverse - All credit to Michael Geary in his post here: http://www.mail-archive.com/discuss@jquery.com/msg04261.htm - Found via http://stackoverflow.com/a/5386150
/*
jHeightMaster
masterElement - the object that slaveElement will need to be smaller than or equal to in height
slaveElement - the object that will shrink to be smaller than or equal to in height
 */
 jHeightMaster = function(masterElement,slaveElement,hiddenClass) {
    var masterHeight         = masterElement.outerHeight();
    var slaveHeight          = slaveElement.outerHeight();
    slaveElement.children().removeClass(hiddenClass);
    while(slaveHeight > masterHeight) {
        slaveElement.children().not('.'+hiddenClass).reverse().last().addClass(hiddenClass);
        slaveHeight = slaveElement.outerHeight();
    }

}