/* eslint-disable vars-on-top */
/* eslint-disable no-var */
var events = {};
var hOP = events.hasOwnProperty;

export type EventType =
  | 'refreshPage'
  | 'notification'
  | 'branchio'
  | 'force_update'
  | 'logout'
  | 'refreshHome'
  | 'REFRESH_SCHEDULE'
  | 'refreshProfile'
  | 'refreshActivity'
  | 'refreshBook'
  | 'refresh_home'
  | 'homeEvent'
  | 'refreshAlbum'
  | 'favClicked'
  | 'updatePackData'
  | 'refreshPack'
  | 'refreshPackDetails'
  | 'refreshtracks';

export default {
  subscribe(event: EventType, listener: Function) {
    // Create the event's object if not yet created
    if (!hOP.call(events, event)) events[event] = [];

    // Add the listener to queue
    var index = events[event].push(listener) - 1;

    // Provide handle back for removal of event
    return {
      remove() {
        delete events[event][index];
      },
    };
  },

  publish(event: EventType, args?: any) {
    // If the event doesn't exist, or there's no listeners in queue, just leave
    if (!hOP.call(events, event)) return;

    // Cycle through events queue, fire!
    events[event].forEach((fn: any) => {
      fn(args);
    });
  },
};
