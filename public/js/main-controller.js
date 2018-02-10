var app = angular.module("main", []);
app.controller("main-controller", ($scope, $http) => {
  // initilaze
  getCatalog();

  $scope.catalog = [];
  $scope.modalBook = {};
  $scope.isNew = false;

  $scope.addBook = () => {
    const url = "api/book";
    $http
      .post(url, $scope.modalBook)
      .then(response => {
          $scope.catalog.push(response.data);
        swal("Book Added", `Book ${$scope.modalBook.title} added!`, "success")
        .then(()=>{
            $(`#b${response.data.id}`).addClass(" animated zoomIn ");
        });
      })
      .catch(err => {
        swal(
          "Book Not Added",
          `Book ${$scope.modalBook.title} not added!`,
          "error"
        );
        console.error(err);
      });
  };

  $scope.updateBook = () => {
    const id = $scope.modalBook.id;
    const index = $scope.catalog.findIndex(book => {
      return book.id == id;
    });
    const book = $scope.modalBook;
    editBook(id, index, book);
  };

  $scope.promptDelete = id => {
    const index = $scope.catalog.findIndex(book => {
      return book.id == id;
    });
    swal({
      title: "Are you sure?",
      text: `Delete book ${$scope.catalog[index].title}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(deletedAccepted => {
      if (deletedAccepted) {
        deleteBook(id, index);
      }
    });
  };

  $scope.setNewModal = () => {
    $scope.isNew = true;
    $scope.modalBook = {};
    $scope.modalBook.genre = "Science fiction";
  };

  $scope.setEditModal = id => {
    $scope.isNew = false;
    $scope.modalBook = {};

    const url = `api/book/${id}`;
    $http
      .get(url)
      .then(response => {
        response.data.publication_date = new Date(
          response.data.publication_date
        );
        $scope.modalBook = response.data;
      })
      .catch(err => {
        swal(
          "Getting Book Failed",
          `Book ${$scope.modalBook.title} not found!`,
          "error"
        );
        console.error(err);
      });
  };

  function getCatalog() {
    const url = "api/catalog";
    $http
      .get(url)
      .then(response => {
        $scope.catalog = response.data;
      })
      .catch(err => {
        swal("Getting Catalog Failed!", ``, "error");
        console.error(err);
      });
  }

  function editBook(id, index, book) {
    const url = `api/book`;
    $http
      .put(url, book)
      .then(response => {
        $scope.catalog[index] = book;
      })
      .catch(err => {
        swal("Updating Book Failed!", ``, "error");
        console.error(err);
      });
  }

  function deleteBook(id, index) {
    const url = `api/book/${id}`;
    $http.delete(url).then(
      response => {
        $(`#b${id}`).addClass(" animated zoomOut ");
        setTimeout(() => {
          $scope.catalog.splice(index, 1);
          $(`#b${id}`).remove();
        }, 400);
      },
      response => {
        swal(
          "Deleting Book Failed!",
          `Deleting book ${$scope.catalog[index].title} faild!`,
          "error"
        );
        console.error(response);
      }
    );
  }
});
