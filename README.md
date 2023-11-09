# Two Content Tabs Example

<style>
  .tabs {
    display: flex;
    cursor: pointer;
  }

  .tab {
    flex: 1;
    padding: 10px;
    text-align: center;
    background-color: #f0f0f0;
  }

  .content {
    display: none;
  }

  .content.active {
    display: block;
  }
</style>

<div class="tabs">
  <div class="tab" onclick="showContent(1)">Tab 1</div>
  <div class="tab" onclick="showContent(2)">Tab 2</div>
</div>

<div id="content1" class="content active">
  ## Content for Tab 1

  This is the content for the first tab.
</div>

<div id="content2" class="content">
  ## Content for Tab 2

  This is the content for the second tab.
</div>

<script>
  function showContent(tabIndex) {
    // Hide all content
    document.querySelectorAll('.content').forEach((content) => {
      content.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(`content${tabIndex}`).classList.add('active');
  }
</script>