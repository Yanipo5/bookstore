app.directive("book", () => {
  return {
      scope:{
          book : "=directive",
          edit : "&edit",
          remove : "&remove",
      },
    template: `
        <div class="book" id='b{{book.id}}'>
                <p class="bookTitle">{{book.title}}</p>
                <span ng-click=edit() class="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#BookModal">
                    <svg class="icon">
                        <use xlink:href="node_modules/bytesize-icons/dist/bytesize-inline.svg#i-edit"></use>
                    </svg>
                    edit</span>
                <span ng-click=remove() class="btn btn-outline-danger btn-sm">
                    <svg class="icon">
                        <use xlink:href="node_modules/bytesize-icons/dist/bytesize-inline.svg#i-trash"></use>
                    </svg>
                    remove</span>
            </div>
        `
  };
});
