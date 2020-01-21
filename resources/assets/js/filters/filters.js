import Vue from 'vue';
import moment from 'moment'

Vue.filter('capitalizeFirst', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1)
});


Vue.filter('formatDate', function(value, fmt = 'D-MMM-YYYY'){
    return (value == null)
        ? ''
        : moment(value, 'YYYY-MM-DD').format(fmt)
});


Vue.filter('truncateFilter', function (fullStr, strLen = 40, separator = '...') {
    if (fullStr.length <= strLen) return fullStr;

    separator = separator || '...';

    let sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2);

    return fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars);
});


