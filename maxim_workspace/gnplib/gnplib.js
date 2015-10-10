/**
 * Author(s) - Maxim Tiourin
 * Creation Date - 10/10/2015
 */

//Root Namespace for the Team GNP library
var gnplib = {
    /*
     * Browser window functions
     */
    window: {
        /*
         * Redirects the header to the given url
         * Absolute redirect ex: "http://www.myurl.com/test.html"
         * Relative redirect in current directory ex: "/test2.html"
         * Relative redirect in directory one level above ex: "../test3.html"
         *
         * isLink = true, when you want to simulate the user clicking on a link, generating browser history
         * isLink = false, when you want to simulate an http redirect, therefore not generating a history item
         */
        redirect: function(url, isLink) {
            if (isLink) {
                window.location.href = url;
            }
            else {
                window.location.replace = url;
            }
        }
    },
    /*
     * Utility functions
     */
    util: {
        /*
         * String utility functions
         */
        string: {

        }
    }
};
