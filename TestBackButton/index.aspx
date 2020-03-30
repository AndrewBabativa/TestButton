<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="TestBackButton.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

    <script src="testButton.js"></script>
    <style>
        .popup-panel {
            display: none;
            width: 400px;
            height: 400px;
            background: blue;
        }
    </style>
</head>
<body>
    <a class="popup-btn" style="cursor: pointer; color: blue">Popup</a>

    <div class="popup-panel"></div>


</body>
</html>
